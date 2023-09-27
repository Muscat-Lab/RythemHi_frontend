/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Note: we provide webpack as an argument to the callback function
    config.resolve.extensions.push('.json');

    // Important: return the modified config
    return config;
  },
};
