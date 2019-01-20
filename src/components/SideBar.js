import React from 'react';
import CurrentSong from './CurrentSong';
import Controller from './Controller';
import './SideBar.css'

const SideBar = () => {
  return(
    <div className="four wide column side-bar">
        Sidebar
        <CurrentSong />
        <Controller />
    </div>
  );
}

export default SideBar;
