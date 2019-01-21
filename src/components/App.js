import React from 'react';
import Bar from './SideBar/Bar';
import SongList from './SongList/SongList';
import './App.css';

const App = () => {
  return(
    <div className="ui equal width grid app">
      <Bar />
      <SongList />
    </div>
  );
}

export default App;
