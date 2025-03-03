export const DEFAULT_THEME = {
  darkMode: true,
  direction: "ltr",
}

export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
export const GITHUB_REDIRECT_URI = `${API_ENDPOINT}/auth/callback/github`

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
export const GOOGLE_REDIRECT_URI = `${API_ENDPOINT}/auth/callback/google`
