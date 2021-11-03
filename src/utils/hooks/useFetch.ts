/* eslint-disable no-unused-vars */
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import api from '../api';
import { ErrorType } from '../types';

export interface FetchResults {
  isLoading: boolean;
  isRefreshing: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: false | ErrorType;
  data: any;
}

/**
 * @description Abstract fetch logic that affects state into a reusable hook
 * @param  {string} path From whence to fetch
 * @param {string | string[]} name  Unique identifier for what's being fetched, for caching purposes
 * @param  {Object} args extra configs

 * @return {FetchResults} State changes across the fetch cycle
 */
export default function useFetch(
  path: string,
  name: string | string[],
  args?: { [key: string]: any },
): FetchResults {
  const {
    isLoading,
    isSuccess,
    isError,
    isFetching: isRefreshing,
    data,
    error,
  } = useQuery(
    name,
    async () => {
      const res = await api.get(path);
      return res.data;
    },
    {
      retry: (failureCount, err) => false,
      ...args,
    },
  );

  return {
    isLoading,
    isRefreshing,
    isSuccess,
    isError,
    data,
    error: {
      message: error
        ? (error as AxiosError).message || 'Something went wrong'
        : '',
      statusCode: (error as AxiosError)?.response?.status || 0,
    },
  };
}
