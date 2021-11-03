import Box from '@mui/material/Box';
import React from 'react';
import SearchResult from '../../components/SearchResult';
import { useAppSelector } from '../../utils/hooks/useState';
import { SearchResultType } from '../../utils/types';
import { RootState } from '../store/store';

const Homepage: React.FC = () => {
  const searchResults: SearchResultType[] = [];

  const { query } = useAppSelector((state: RootState) => state.homepage);
  console.log(query);

  if (searchResults.length === 0) {
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
      {searchResults.map((r) => (
        <SearchResult result={r} />
      ))}
    </Box>
  );
};

export default Homepage;
