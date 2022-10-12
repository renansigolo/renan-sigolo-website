// You can choose which headers to add to the list
// after learning more below.
const ContentSecurityPolicy = `
  default-src 'self';
  style-src 'self' 'unsafe-inline';
  script-src 'self' 'unsafe-inline';
`
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim()
  }
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders
      }
    ]
  }
}
