/**
 * Environment configuration utilities with type safety and validation
 */

/**
 * Environment variable configuration
 */
export const ENV_CONFIG = {
  // API Configuration
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  
  // Authentication
  NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  
  // App Configuration
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
}

/**
 * Utility functions for environment checks
 */
export const env = {
  isDevelopment: () => ENV_CONFIG.NODE_ENV === 'development',
  isProduction: () => ENV_CONFIG.NODE_ENV === 'production',
  isTest: () => ENV_CONFIG.NODE_ENV === 'test',
  isPreview: () => ENV_CONFIG.VERCEL_ENV === 'preview',
  
  // Feature flags based on environment
  features: {
    enableAnalytics: () => env.isProduction(),
    enableDebugLog: () => env.isDevelopment(),
    enableErrorReporting: () => env.isProduction() || env.isPreview(),
  }
}

/**
 * Validate required environment variables
 */
export function validateEnv() {
  const requiredEnvVars = {
    // Add required environment variables here
    // NEXT_PUBLIC_API_ENDPOINT: ENV_CONFIG.NEXT_PUBLIC_API_ENDPOINT,
  }

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key)

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    )
  }
}

/**
 * Get environment variable with fallback
 */
export function getEnvVar(key, fallback = '') {
  return ENV_CONFIG[key] || fallback
}

/**
 * App configuration based on environment
 */
export const appConfig = {
  name: 'MillionScope',
  description: 'Millions of perspectives in one vision.',
  url: env.isProduction() 
    ? 'https://millionscope.github.io' 
    : 'http://localhost:3000',
  
  // API Configuration
  api: {
    endpoint: getEnvVar('NEXT_PUBLIC_API_ENDPOINT', '/api'),
    timeout: 10000,
  },
  
  // Authentication
  auth: {
    github: {
      clientId: getEnvVar('NEXT_PUBLIC_GITHUB_CLIENT_ID'),
      enabled: !!getEnvVar('NEXT_PUBLIC_GITHUB_CLIENT_ID'),
    },
    google: {
      clientId: getEnvVar('NEXT_PUBLIC_GOOGLE_CLIENT_ID'),
      enabled: !!getEnvVar('NEXT_PUBLIC_GOOGLE_CLIENT_ID'),
    },
  },
  
  // Feature flags
  features: {
    analytics: env.features.enableAnalytics(),
    debugMode: env.features.enableDebugLog(),
    errorReporting: env.features.enableErrorReporting(),
  }
}