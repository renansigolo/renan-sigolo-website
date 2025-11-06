// You can choose which headers to add to the list
// after learning more below.
// const ContentSecurityPolicy = `
//   base-uri 'none';
//   default-src 'self';
//   object-src 'none';
//   script-src 'none';
//   script-src-elem 'self' https://*.googletagmanager.com 'unsafe-inline';
//   connect-src https://us-central1-renan-sigolo-website.cloudfunctions.net;
//   require-trusted-types-for 'script';
// `

const securityHeaders = [
  // {
  //   key: "Content-Security-Policy",
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim()
  // },
  {
    key: "Referrer-Policy",
    value: "no-referrer-when-downgrade",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const config = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        // headers: securityHeaders,
      },
    ];
  },
};

export default config;
