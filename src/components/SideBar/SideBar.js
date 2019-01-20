import React from 'react';
import CurrentSong from './CurrentSong';
import './SideBar.css'

const SideBar = () => {
  return(
    <div className="three wide column side-bar">
        <CurrentSong />
    </div>
  );
}

export default SideBar;
