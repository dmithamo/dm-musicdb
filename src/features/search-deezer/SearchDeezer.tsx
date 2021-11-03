import Box from '@mui/material/Box';
import { isEmpty } from 'lodash';
import React from 'react';
import SearchResult from '../../components/SearchResult';
import useFetch from '../../utils/hooks/useFetch';
import { useAppSelector } from '../../utils/hooks/useState';
import { SearchResultType } from '../../utils/types';
import { RootState } from '../store/store';

const Homepage: React.FC = () => {
  const { query } = useAppSelector((state: RootState) => state.homepage);

  const { isLoading, data } = useFetch(
    `/search?q=${query}`,
    ['search', query],
    {
      enabled: !!query,
    },
  );

  if (isLoading) {
    return <>Loading ...</>;
  }

  if (isEmpty(data) || !data?.data || isEmpty(data?.data)) {
    return (
      <Box
        height="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Search for something
      </Box>
    );
  }

  return (
    <Box>
      {(data?.data as SearchResultType[]).map((r) => (
        <SearchResult result={r} />
      ))}
    </Box>
  );
};

export default Homepage;
