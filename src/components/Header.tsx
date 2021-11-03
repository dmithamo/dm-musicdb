import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { setQuery } from '../features/search-deezer/searchSlice';
import { RootState } from '../features/store/store';
import { useAppDispatch, useAppSelector } from '../utils/hooks/useState';
import Logo from './Logo';
import Searchbar from './Searchbar';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const { query } = useAppSelector((state: RootState) => state.homepage);
  const handleSearch = (value: string) => {
    dispatch(setQuery(value));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Searchbar
          query={query}
          onSearch={handleSearch}
          placeholder="Search for artist, song or album"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
