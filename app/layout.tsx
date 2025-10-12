import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Accent Innovations - AI-Driven Aviation Communication Solutions",
    template: "%s | Accent Innovations"
  },
  description: "Transforming unclear communication with individualized accent and speech training for clear, confident operations. Patent-pending AI technology for aviation safety.",
  keywords: [
    "aviation communication",
    "accent modification",
    "pilot training",
    "speech therapy",
    "aviation safety",
    "AI speech technology",
    "pilot communication",
    "aviation miscommunication",
    "speech training",
    "aviation training"
  ],
  authors: [{ name: "Dr. Katie Pierson", url: "https://accent-innovations.com" }],
  creator: "Accent Innovations",
  publisher: "Accent Innovations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://accent-innovations.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://accent-innovations.com",
    siteName: "Accent Innovations",
    title: "Accent Innovations - AI-Driven Aviation Communication Solutions",
    description: "Transforming unclear communication with individualized accent and speech training for clear, confident operations. Patent-pending AI technology for aviation safety.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Accent Innovations Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accent Innovations - AI-Driven Aviation Communication Solutions",
    description: "Transforming unclear communication with individualized accent and speech training for clear, confident operations.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Accent Innovations",
    "url": "https://accent-innovations.com",
    "logo": "https://accent-innovations.com/logo.jpg",
    "description": "Transforming unclear communication with individualized accent and speech training for clear, confident operations.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Dr. Katie Pierson",
      "jobTitle": "Founder & CEO",
      "description": "Award-winning speech-language pathologist and researcher dedicated to enhancing communication safety in aviation"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1975 NW 167th Pl #100",
      "addressLocality": "Beaverton",
      "addressRegion": "OR",
      "postalCode": "97006",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-503-327-9366",
      "contactType": "customer service",
      "email": "katie.pierson@accent-innovations.com"
    },
    "sameAs": [
      "https://www.linkedin.com/in/accent-innovations/"
    ],
    "serviceType": "Aviation Communication Training",
    "areaServed": "Worldwide",
    "industry": "Aviation Technology"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
