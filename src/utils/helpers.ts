/**
 * Format price with currency symbol
 * @param price - Price in decimal format
 * @param currency - Currency code (default: INR)
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currency: string = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Truncate text to a specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length (default: 100)
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Generate a random ID
 * @returns Random ID string
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

/**
 * Get browser storage item with expiration check
 * @param key - Storage key
 * @returns Stored value or null if expired or not found
 */
export const getStorageItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  
  const { value, expiry } = JSON.parse(item);
  
  // Check if item has expired
  if (expiry && new Date().getTime() > expiry) {
    localStorage.removeItem(key);
    return null;
  }
  
  return value;
};

/**
 * Set browser storage item with optional expiration
 * @param key - Storage key
 * @param value - Value to store
 * @param expiryDays - Days until expiration (optional)
 */
export const setStorageItem = <T>(key: string, value: T, expiryDays?: number): void => {
  const item = {
    value,
    expiry: expiryDays ? new Date().getTime() + expiryDays * 24 * 60 * 60 * 1000 : null,
  };
  
  localStorage.setItem(key, JSON.stringify(item));
};