import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import React from 'react';
import useFetch from '../utils/hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';

type Props = {
  url: string;
};

const TrackList: React.FC<Props> = ({ url }: Props) => {
  const { isLoading, isRefreshing, isError, error, isSuccess, data } = useFetch(
    url,
    ['tracklist', url],
    { enabled: !!url },
  );

  if (isLoading || isRefreshing) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      {isSuccess ? (
        <Box>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </Box>
      ) : (
        <Alert severity="error">Unable to fetch tracklist</Alert>
      )}

      {isError && error && <Alert severity="error">{error?.message}</Alert>}
    </Box>
  );
};

export default TrackList;
