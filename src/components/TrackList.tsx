import { styled } from '@mui/material';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatTrackLength } from '../utils/formatData';
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

  if (isError && error) {
    return <Alert severity="error">{error?.message}</Alert>;
  }

  return (
    <Box>
      <StyledTrackListHeader>Top tracks</StyledTrackListHeader>
      {isSuccess && data?.total !== 0 ? (
        <Box>
          <StyledList>
            {(data?.data as any[]).map((t) => (
              <StyledTrack>
                <ListItem disablePadding>
                  <ListItemAvatar>
                    <Avatar src={t?.album?.cover_small} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={t?.title_short}
                    secondary={(t?.contributors as any[])?.map((a) => (
                      <>
                        <StyledArtistName to={`/artist/${a.id}`}>
                          {a?.name}
                        </StyledArtistName>
                        <> </>
                      </>
                    ))}
                  />
                </ListItem>
                <ListItemText secondary={formatTrackLength(t?.duration)} />
              </StyledTrack>
            ))}
          </StyledList>
        </Box>
      ) : (
        <Alert severity="error">No top tracks found for this artist</Alert>
      )}
    </Box>
  );
};

const StyledList = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '90%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

const StyledTrack = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledTrackListHeader = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0, 4, 0),
  fontSize: theme.spacing(5),
  fontWeight: 700,
  color: theme.palette.common.black,
}));

const StyledArtistName = styled(Link)(({ theme }) => ({
  fontSize: theme.spacing(2),
  color: theme.palette.grey[500],
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default TrackList;
