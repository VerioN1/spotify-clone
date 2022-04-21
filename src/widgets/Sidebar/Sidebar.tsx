import React from 'react';

import Nav from '@/features/Nav';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className="side-bar">
      <h1>Spotify</h1>
      <Nav />
    </div>
  );
};

export default Sidebar;
