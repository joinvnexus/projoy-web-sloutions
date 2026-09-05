// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes safely, resolving conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to a human-readable format.
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Calculate estimated reading time for a body of text.
 */
export function readingTime(text: string): number {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

/**
 * Truncate text to a given character limit, appending an ellipsis.
 */
export function truncate(text: string, limit: number): string {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trimEnd() + "…";
}

/**
 * Convert a string to a URL-safe slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
