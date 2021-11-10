import Box from '@mui/material/Box';
import React from 'react';

type Props = {
  error: {
    message: string;
    errorCode?: number;
  };
};
const ErrorPage: React.FC<Props> = ({ error }: Props) => (
  <Box
    height="90vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    {error}
  </Box>
);

export default ErrorPage;
