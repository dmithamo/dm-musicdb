import Box from '@mui/material/Box';
import React from 'react';
import { SearchResultType } from '../utils/types';

type Props = {
  result: SearchResultType;
};

const SearchResult: React.FC<Props> = ({ result }: Props) => (
  <Box p={5}>
    <pre>{JSON.stringify(result, null, 4)}</pre>
  </Box>
);

export default SearchResult;
