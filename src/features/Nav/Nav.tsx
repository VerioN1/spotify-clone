import React from 'react';

import './Nav.css';

import { useNavigate } from 'react-router-dom';
import { Heart, Home, Plus, Search, Wallpaper } from 'tabler-icons-react';

import NavButton from '@/entities/NavButton/NavButton';
import Divider from '@/shared/Divider/Divider';
const Nav = () => {
  //TODO: it is recommended to use object instead of hard coding nav buttons
  const navigate = useNavigate();
  return (
    <>
      <NavButton Icon={<Home />} onClick={() => navigate('/')} text={'Home'} />
      <NavButton Icon={<Search />} onClick={() => navigate('/Search')} text={'Search'} />
      <NavButton
        Icon={<Wallpaper />}
        onClick={() => console.log('WithRouter')}
        text={'Your Library'}
      />
      <Divider />
      <NavButton
        Icon={<Plus />}
        onClick={() => console.log('WithRouter')}
        text={'Create Playlist'}
      />
      <NavButton Icon={<Heart />} onClick={() => console.log('WithRouter')} text={'Liked Songs'} />
    </>
  );
};

export default Nav;
