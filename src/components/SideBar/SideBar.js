import React from 'react';
import CurrentSong from './CurrentSong';
import Controller from './Controller';
import './SideBar.css'

const SideBar = () => {
  return(
    <div className="three wide column side-bar">
        <CurrentSong />
        <Controller />
    </div>
  );
}

export default SideBar;
