/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value:
                  "upgrade-insecure-requests",
              },
              {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN',
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              },
              {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin',
              },
              {
                key: 'Permissions-Policy',
                value: 'geolocation=self',
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=31536000; includeSubDomains',
              },
              {
                key: 'X-Xss-Protection',
                value: '1; mode=block',
              },
            ],
          },
        ];
    },
  }
  
  const withNextIntl = require('next-intl/plugin')(
    './i18n.js'
  );
  
  module.exports = withNextIntl(nextConfig);
  