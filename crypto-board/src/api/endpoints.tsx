const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log('BASE_URL: ', BASE_URL);

const SERVICES = {
  assets: 'assets',
  rates: 'rates',
};

export const createEndpoint = (
  service: keyof typeof SERVICES,
  path?: string
) => {
  return `${BASE_URL}/${service}${path ? `/${path}` : ''}`;
};

export const endpoints = {
  assets: {
    assets: createEndpoint('assets'),
    // assetHistory: createEndpoint("assets", )
  },
  rates: {
    rates: createEndpoint('rates'),
  },
};
