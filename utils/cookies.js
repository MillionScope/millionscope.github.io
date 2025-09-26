export const getCookie = (name) => {
  // Check if we're in a browser environment
  if (typeof document === 'undefined') {
    return null
  }
  
  const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)
  return match ? match[2] : null
}
