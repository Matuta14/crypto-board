const BASE_URL = import.meta.env.VITE_BASE_URL;

export const SERVICES = {
  assets: 'assets',
  rates: 'rates',
};

export const createEndpoint = (service: string) => {
  return `${BASE_URL}/${service}`;
};
