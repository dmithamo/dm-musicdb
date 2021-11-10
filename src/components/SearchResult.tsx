import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import PlaceholderAlbumArt from '../assets/images/placeholder_album.jpg';
import { setQuery } from '../features/SearchDeezer/searchSlice';
import { formatTrackLength } from '../utils/formatData';
import { useAppDispatch } from '../utils/hooks/useState';
import { SearchResultType } from '../utils/types';

type Props = {
  result: SearchResultType;
};

const StyledTrackTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  fontWeight: 700,
  color: theme.palette.common.black,
}));

const StyledTrackLength = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2),
  color: theme.palette.grey[500],
}));

const StyledArtistName = styled(Link)(({ theme }) => ({
  fontSize: theme.spacing(2),
  color: theme.palette.grey[500],
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const StyledAlbumName = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.8),
  color: theme.palette.grey[700],
}));

const SearchResult: React.FC<Props> = ({ result }: Props) => {
  const dispatch = useAppDispatch();
  const handleResetQuery = () => {
    dispatch(setQuery(''));
  };

  return (
    <Paper>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
      >
        <img
          src={result?.album?.cover_big || PlaceholderAlbumArt}
          alt="Album art"
          width="100%"
          height="auto"
        />

        <Box flexGrow={1} minHeight={120} height="auto" p={2} width="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <StyledTrackTitle>{result?.title}</StyledTrackTitle>
            <StyledTrackLength>
              {formatTrackLength(result?.duration || 0)}
            </StyledTrackLength>
          </Box>
          <StyledArtistName
            onClick={handleResetQuery}
            to={`/artist/${result?.artist?.id}`}
          >
            {result?.artist?.name}
          </StyledArtistName>
          <StyledAlbumName>{result?.album?.title}</StyledAlbumName>
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchResult;
