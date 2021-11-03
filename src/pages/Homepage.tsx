import Box from '@mui/material/Box';
import React from 'react';
import SearchResult from '../components/SearchResult';
import { SearchResultType } from '../utils/types';

const Homepage: React.FC = () => {
  const searchResults: SearchResultType[] = [];

  if (searchResults.length === 0) {
    return (
      <Box
        height="100vh"
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
