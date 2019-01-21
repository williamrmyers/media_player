import React from 'react';
import CurrentSong from './CurrentSong';
import './SideBar.css'

const Bar = () => {
  return (
    <div className="bar">
      <CurrentSong />
    </div>
  );
}

export default Bar
