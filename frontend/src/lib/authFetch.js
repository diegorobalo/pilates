// Global fetch interceptor: automatically attach the stored JWT to same-origin
// /api requests, so every component's fetch() call is authenticated without
// having to pass headers manually. Public auth endpoints simply have no token
// stored yet, so nothing is attached there.
const originalFetch = window.fetch.bind(window)

window.fetch = (input, init = {}) => {
  try {
    const url = typeof input === 'string' ? input : (input && input.url) || ''
    if (url.startsWith('/api')) {
      // Fall back to the onboarding temp token: a freshly verified alumna
      // completing her profile only has `tempAccessToken` until onboarding finishes.
      const token =
        localStorage.getItem('accessToken') || localStorage.getItem('tempAccessToken')
      if (token) {
        const headers = new Headers(
          init.headers || (typeof input !== 'string' && input ? input.headers : undefined)
        )
        if (!headers.has('Authorization')) {
          headers.set('Authorization', `Bearer ${token}`)
          init = { ...init, headers }
        }
      }
    }
  } catch {
    // If anything goes wrong, fall back to a normal fetch.
  }
  return originalFetch(input, init)
}
