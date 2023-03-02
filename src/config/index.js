const PROD = {
  apiBaseUrl: 'https://jsonplaceholder.typicode.com/',
};

const STAGING = {
  apiBaseUrl: 'https://jsonplaceholder.typicode.com/',
};

const DEV = {
  apiBaseUrl: process.env.REACT_APP_BASE_URL || STAGING.apiBaseUrl,
};

const config =
  process.env.REACT_APP_ENV === 'prod'
    ? PROD
    : process.env.REACT_APP_ENV === 'staging'
    ? STAGING
    : DEV;

export default config;
