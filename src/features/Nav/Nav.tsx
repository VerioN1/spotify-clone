import React from 'react';

import './Nav.css';

import { Home, Search, Wallpaper } from 'tabler-icons-react';

import NavButton from '@/entities/NavButton/NavButton';
const Nav = () => {
  //TODO: it is recommended to use object instead of hard coding nav buttons
  // const navigate = useNavigate();
  return (
    <>
      <NavButton Icon={<Home />} onClick={() => console.log('WithRouter')} text={'Home'} />
      <NavButton Icon={<Search />} onClick={() => console.log('WithRouter')} text={'Search'} />
      <NavButton
        Icon={<Wallpaper />}
        onClick={() => console.log('WithRouter')}
        text={'Your Library'}
      />
    </>
  );
};

export default Nav;
