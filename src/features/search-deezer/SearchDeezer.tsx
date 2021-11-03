import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
    <Box pt={2} pb={2} pl={15} pr={15}>
      <Grid container spacing={10}>
        {(data?.data as SearchResultType[]).map((r) => (
          <Grid xs={12} md={3} item>
            <SearchResult result={r} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Homepage;
