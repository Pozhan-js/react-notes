/** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;
const withNextIntl = require("next-intl/plugin")();

const nextConfig = {};

module.exports = withNextIntl(nextConfig);
