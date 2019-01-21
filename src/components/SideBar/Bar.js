import React from 'react';
import CurrentSong from './CurrentSong';
import Controller from './Controller';
import './SideBar.css'

const Bar = () => {
  return (
    <div className="bar">
      <CurrentSong />
      <Controller />
    </div>
  );
}

export default Bar
