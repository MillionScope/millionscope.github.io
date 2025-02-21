export const DEFAULT_THEME = {
  darkMode: true,
  direction: "ltr",
}

export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
export const GITHUB_REDIRECT_URI = `${API_ENDPOINT}/auth/callback/github`

console.log("GITHUB_CLIENT_ID", GITHUB_CLIENT_ID)
console.log("GITHUB_REDIRECT_URI", GITHUB_REDIRECT_URI)
console.log("API_ENDPOINT", API_ENDPOINT)
