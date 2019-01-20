import React from 'react';
import SideBar from './SideBar';
import SongList from './SongList';

const App = () => {
  return(
    <div className="ui equal width grid">
      <SideBar />
      <SongList />
    </div>
  );
}

export default App;
