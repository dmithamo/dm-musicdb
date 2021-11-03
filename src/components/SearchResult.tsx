import Box from '@mui/material/Box';
import React from 'react';
import { SearchResultType } from '../utils/types';

type Props = {
  result: SearchResultType;
};

const SearchResult: React.FC<Props> = ({ result }: Props) => (
  <Box>{JSON.stringify(result)}</Box>
);

export default SearchResult;
