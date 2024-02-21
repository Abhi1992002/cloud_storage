/**
 * An Array of routes accessible to the public
 * These routes do not require authentication
 * @types {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An Array of routes taht are used for authentication
 * These routes will loggeed in users to /settings
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purpose
 * @types {string}
 */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/main";
