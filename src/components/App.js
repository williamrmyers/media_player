import React from 'react';
import SideBar from './SideBar/SideBar';
import Bar from './SideBar/Bar';
import SongList from './SongList/SongList';

const App = () => {
  return(
    <div className="ui equal width grid">
      <SideBar />
      <Bar />
      <SongList />
    </div>
  );
}

export default App;
