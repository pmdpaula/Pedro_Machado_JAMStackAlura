const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@pmdpaula/sbui',
  '@pmdpaula/modulo-comum',
]);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
