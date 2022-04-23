import React from 'react';

import Nav from '@/entities/Nav';
import './Sidebar.css';
import SidePlaylist from '@/entities/SidePlaylist/SidePlaylist';
import Divider from '@/shared/Divider/Divider';
const Sidebar = () => {
  return (
    <div className="side-bar">
      <h1>Spotify</h1>
      <Nav />
      <Divider withLine />
      <SidePlaylist />
    </div>
  );
};

export default Sidebar;
