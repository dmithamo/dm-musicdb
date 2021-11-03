import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <Box
    height="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <>You must be lost</>
    <Link to="/">Go home</Link>
  </Box>
);

export default NotFoundPage;
