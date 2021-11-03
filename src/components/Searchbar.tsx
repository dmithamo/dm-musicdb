import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import React, { useState } from 'react';
import useKeyPress from '../utils/useKeyPress';

type Props = {
  // eslint-disable-next-line no-unused-vars
  onSearch: (query: string) => void;
  query: string;
  placeholder?: string;
};
const Searchbar: React.FC<Props> = ({
  query,
  onSearch,
  placeholder,
}: Props) => {
  const [value, setValue] = useState<string>(query);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    onSearch('');
  };

  const handleSubmitQuery = () => {
    onSearch(value);
  };

  // listen for enter and escape keys
  useKeyPress(handleClear, 'Escape');
  useKeyPress(handleSubmitQuery, 'Enter');

  return (
    <SearchBoxWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        value={value}
        onChange={handleQueryChange}
      />
    </SearchBoxWrapper>
  );
};

Searchbar.defaultProps = {
  placeholder: 'Search ...',
};

const SearchBoxWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(3, 3, 3, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70ch',
    },
  },
}));

export default Searchbar;
