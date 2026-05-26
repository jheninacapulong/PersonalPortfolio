import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines and merges Tailwind CSS classes using clsx and tailwind-merge
 * @param {...any[]} inputs - CSS class names to merge
 * @returns {string} Merged CSS classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 


export const isIframe = window.self !== window.top;
