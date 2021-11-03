import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import Logo from './Logo';
import Searchbar from './Searchbar';

const Header: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Searchbar
          query={query}
          onSearch={setQuery}
          placeholder="Search for artist, song or album"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
