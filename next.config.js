// You can choose which headers to add to the list
// after learning more below.
const ContentSecurityPolicy = `
  base-uri 'none';
  default-src 'self';
  object-src 'none';
  script-src 'none';
  script-src-elem 'self' https://*.googletagmanager.com 'unsafe-inline';
  connect-src https://us-central1-renan-sigolo-website.cloudfunctions.net;
  require-trusted-types-for 'script';
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
