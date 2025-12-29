import validator from 'validator';

/**
 * Sanitizes a string by escaping HTML entities
 */
export function escapeHtml(unsafe: string): string {
  return validator.escape(unsafe);
}

/**
 * Validates and sanitizes an email address
 */
export function validateEmail(email: string): { valid: boolean; sanitized: string } {
  const trimmed = email.trim();
  if (!trimmed) {
    return { valid: false, sanitized: '' };
  }
  
  const sanitized = validator.normalizeEmail(trimmed);
  const valid = sanitized !== false && validator.isEmail(sanitized);
  
  return {
    valid,
    sanitized: valid ? sanitized : trimmed.toLowerCase()
  };
}

/**
 * Validates and sanitizes a text field
 */
export function validateText(text: string, maxLength: number): { valid: boolean; sanitized: string } {
  const trimmed = text.trim();
  if (!trimmed) {
    return { valid: false, sanitized: '' };
  }
  
  if (trimmed.length > maxLength) {
    return { valid: false, sanitized: trimmed.substring(0, maxLength) };
  }
  
  return { valid: true, sanitized: trimmed };
}

/**
 * Sanitizes text for use in HTML (escapes HTML entities)
 */
export function sanitizeForHtml(text: string): string {
  return escapeHtml(text);
}

