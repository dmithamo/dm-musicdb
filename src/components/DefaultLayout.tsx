import Box from '@mui/material/Box';
import React, { FC } from 'react';
import Header from './Header';

type Props = {
  children: FC;
};
const DefaultLayout: React.FC<Props> = ({ children }: Props) => (
  <Box>
    <Header />
    <Box>{children}</Box>
  </Box>
);

export default DefaultLayout;
