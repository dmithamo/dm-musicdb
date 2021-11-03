import Box from '@mui/material/Box';
import React, { FC } from 'react';

type Props = {
  children: FC;
};
const DefaultLayout: React.FC<Props> = ({ children }: Props) => (
  <Box>{children}</Box>
);

export default DefaultLayout;
