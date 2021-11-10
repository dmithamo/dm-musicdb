import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: `http://localhost:8080/${
    process.env.REACT_APP_DEEZER_BASE_API_URL || ''
  }`,
  headers: {
    Accept: 'application/json',
  },
});

/**
 * @description Intercept the request and insert
 * auth header if required
 */
api.interceptors.request.use((config: AxiosRequestConfig) => {
  const NO_AUTH_HEADER_NEEDED: string[] = []; // not sure if all urls require auth

  if (NO_AUTH_HEADER_NEEDED.includes(config.url as string)) {
    return config;
  }
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${
        process.env.REACT_APP_DEEZER_API_AUTH_TOKEN || ''
      }`,
    },
  };
});

export default api;
