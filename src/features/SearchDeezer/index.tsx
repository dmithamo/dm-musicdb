import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { isEmpty } from 'lodash';
import React from 'react';
import ErrorPage from '../../components/ErrorPage';
import LoadingSpinner from '../../components/LoadingSpinner';
import SearchResult from '../../components/SearchResult';
import useFetch from '../../utils/hooks/useFetch';
import { useAppSelector } from '../../utils/hooks/useState';
import { SearchResultType } from '../../utils/types';
import { RootState } from '../store/store';

const SearchDeezer: React.FC = () => {
  const { query } = useAppSelector((state: RootState) => state.search);

  const { isLoading, isError, error, isSuccess, data } = useFetch(
    `/search?q=${query}`,
    ['search', query],
    {
      enabled: !!query,
    },
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError && error) {
    <ErrorPage error={error} />;
  }

  return isSuccess && !isEmpty(data) ? (
    <Box pt={2} pb={2} pl={15} pr={15}>
      <Grid container spacing={10}>
        {(data?.data as SearchResultType[]).map((r) => (
          <Grid xs={12} md={3} item>
            <SearchResult result={r} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <Alert severity="error">No results found</Alert>
  );
};

export default SearchDeezer;
