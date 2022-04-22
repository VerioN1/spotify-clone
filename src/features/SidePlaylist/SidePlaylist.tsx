import React from 'react';

import './SidePlaylist.css';
import PlaylistLink from '@/entities/PlaylistLink/PlaylistLink';

import { TEMP_PLAYLIST } from './model';
const SidePlaylist = () => {
  return (
    <ul className="side-playlist-wrapper bold">
      {TEMP_PLAYLIST.map((playListName) => (
        <PlaylistLink key={playListName} playListName={playListName} />
      ))}
    </ul>
  );
};

export default SidePlaylist;
