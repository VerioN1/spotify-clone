import React from 'react';
import './PlaylistLink.css';
type Props = {
  playListName: string;
};
const PlaylistLink = ({ playListName }: Props) => {
  return (
    <>
      <li className="playlist-link">Radio {playListName}</li>
    </>
  );
};

export default PlaylistLink;
