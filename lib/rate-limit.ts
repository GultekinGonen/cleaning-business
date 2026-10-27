// lib/rate-limit.ts

// Set the time window to 10 minutes, expressed in milliseconds.
// JavaScript measures time in milliseconds rather than minutes.
const WINDOW_MS = 10 * 60 * 1000;

// Allow a maximum of 5 requests from the same IP address
// during the 10-minute time window.
const MAX_REQUESTS = 5;

// Store request timestamps in memory, grouped by IP address.
// The key is the IP address; the value is an array of timestamps.
// Example: "192.0.2.10" -> [timestamp1, timestamp2, timestamp3]
const requests = new Map<string, number[]>();

// Check whether an IP address has exceeded its request limit.
// Returns true if the request should be blocked, otherwise false.
export function isRateLimited(ip: string): boolean {
  // Get the current time so we can determine which requests are recent.
  const now = Date.now();

  // Retrieve this IP address's request history.
  // If there is no history yet, start with an empty array.
  // Remove timestamps older than the 10-minute window.
  const recentRequests = (requests.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  // If 5 requests have already occurred within the time window,
  // block this request and save the cleaned-up request history.
  if (recentRequests.length >= MAX_REQUESTS) {
    requests.set(ip, recentRequests);
    return true;
  }

  // The IP address is still within its limit.
  // Record the current request so it counts toward the limit.
  recentRequests.push(now);

  // Save the updated request history for this IP address.
  requests.set(ip, recentRequests);

  // Return false because this request is allowed.
  return false;
}