import { styled } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PlaceholderAlbumArt from '../../assets/images/placeholder_album.jpg';
import ErrorPage from '../../components/ErrorPage';
import LoadingSpinner from '../../components/LoadingSpinner';
import TrackList from '../../components/TrackList';
import useFetch from '../../utils/hooks/useFetch';
import { useAppSelector } from '../../utils/hooks/useState';
import { RootState } from '../store/store';

const ArtistHomepage: React.FC = () => {
  const { artistID } = useParams<{ artistID: string }>();
  const { query } = useAppSelector((state: RootState) => state.search);
  const history = useHistory();

  // auto-redirect to homepage on search
  useEffect(() => {
    !!query && history.push('/');
  }, [query]);

  const { isLoading, isRefreshing, isError, error, isSuccess, data } = useFetch(
    `/artist/${artistID}`,
    ['artist', artistID],
    { enabled: !!artistID },
  );

  if (isLoading || isRefreshing) {
    return <LoadingSpinner />;
  }
  if (isError && !!error) {
    return <ErrorPage error={error} />;
  }

  return (
    <Box p={2}>
      <StyledPageHeader>{`${data?.name}'s page`}</StyledPageHeader>
      {isSuccess ? (
        <StyledWrapper>
          <StyledArtistMeta>
            <img
              src={data?.picture_big || PlaceholderAlbumArt}
              alt="Artist art"
              width={300}
              height="auto"
            />
            <StyledArtistName>{data?.name}</StyledArtistName>
          </StyledArtistMeta>
          <Box flex={1}>
            <TrackList url={`/artist/${artistID}/top?limit=50`} />
          </Box>
        </StyledWrapper>
      ) : (
        <Alert severity="error">Unable to fetch artist</Alert>
      )}
    </Box>
  );
};

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  gridGap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

const StyledPageHeader = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0, 4, 0),
  fontSize: theme.spacing(6),
  fontWeight: 700,
  color: theme.palette.common.black,
}));

const StyledArtistMeta = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  height: 'fit-content',
  width: 'fit-content',
  marginRight: theme.spacing(8),
}));

const StyledArtistName = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  fontWeight: 700,
  color: theme.palette.common.black,
  padding: theme.spacing(4, 2),
}));

export default ArtistHomepage;
