/** @type {import('next').NextConfig} */
const app = require('./package.json');

module.exports = {
  env: { ASSET_PREFIX: process.env.NODE_ENV == 'production' ? `/${app.name}` : '' },
  basePath: process.env.NODE_ENV == 'production' ? `/${app.name}` : '',
  reactStrictMode: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  output: "export",
};
