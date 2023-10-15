const dotenv = require('dotenv');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  const envConfig = {
    [PHASE_DEVELOPMENT_SERVER]: {
      env: 'development',
      envFile: './env/.env.dev',
    },
    [PHASE_PRODUCTION_BUILD]: {
      env: 'production',
      envFile: './env/.env.prod',
    },
  };

  const phaseConfig =
    envConfig[phase] || envConfig[PHASE_DEVELOPMENT_SERVER];

  dotenv.config({ path: phaseConfig.envFile });

  return {
    env: {
      API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
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
};
