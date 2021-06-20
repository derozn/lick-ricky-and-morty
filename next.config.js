// next.config.js
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

module.exports = withPlugins([withSvgr], {
  poweredByHeader: false,
  images: {
    domains: ['rickandmortyapi.com'], // Allow for next/image to resolve images.
  },
});
