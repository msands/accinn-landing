import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Initialize Redis REST client from environment variables
// These will be automatically set by Heroku when you add the Upstash Redis add-on
// REST client is Edge Runtime compatible
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
})

// Create rate limiter: 10 requests per minute per IP for API routes
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '1 m'),
  analytics: true,
  prefix: '@upstash/ratelimit',
})

export async function middleware(request: NextRequest) {
  // Only apply rate limiting to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Get the IP address from headers (Heroku uses x-forwarded-for)
    // Take the first IP if multiple are present (proxy chain)
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 
               request.headers.get('x-real-ip') ?? 'unknown'
    
    try {
      // Check rate limit
      const { success, limit, remaining, reset } = await ratelimit.limit(ip)
      
      if (!success) {
        // Rate limit exceeded
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
              'X-RateLimit-Reset': reset.toString(),
            },
          }
        )
      }
      
      // Add rate limit headers to successful requests
      const response = NextResponse.next()
      response.headers.set('X-RateLimit-Limit', limit.toString())
      response.headers.set('X-RateLimit-Remaining', remaining.toString())
      response.headers.set('X-RateLimit-Reset', reset.toString())
      return response
    } catch (error) {
      // If Redis is not available (e.g., during initial setup), allow the request
      // but log the error
      console.error('Rate limiting error:', error)
      // In production, you might want to fail closed instead of open
      // For now, we'll allow requests if rate limiting fails
      return NextResponse.next()
    }
  }
  
  // For non-API routes, continue normally
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}

