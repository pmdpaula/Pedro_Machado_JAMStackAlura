/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@pmdpaula/modulo-comum']);
const withImages = require('next-images');
const redirects = require('./config/redirects');

module.exports = withImages({
  esModule: true,
});

module.exports = {
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
