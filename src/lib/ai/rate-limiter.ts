/**
 * Simple in-memory sliding window rate limiter to protect free tier AI quota.
 */

interface RateLimitEntry {
  timestamps: number[];
}

const ipMap = new Map<string, RateLimitEntry>();

// Maximum requests per window
const MAX_REQUESTS_PER_WINDOW = 10;
// Window duration in milliseconds (60 seconds)
const WINDOW_DURATION_MS = 60 * 1000;

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const entry = ipMap.get(ip) || { timestamps: [] };

  // Filter out timestamps older than current window
  const validTimestamps = entry.timestamps.filter((ts) => now - ts < WINDOW_DURATION_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = validTimestamps[0];
    const retryAfterSeconds = Math.ceil((oldest + WINDOW_DURATION_MS - now) / 1000);
    return { allowed: false, retryAfterSeconds: Math.max(1, retryAfterSeconds) };
  }

  validTimestamps.push(now);
  ipMap.set(ip, { timestamps: validTimestamps });

  // Periodically clean up ancient entries if map gets large
  if (ipMap.size > 2000) {
    for (const [key, val] of ipMap.entries()) {
      if (val.timestamps.every((ts) => now - ts > WINDOW_DURATION_MS)) {
        ipMap.delete(key);
      }
    }
  }

  return { allowed: true };
}
