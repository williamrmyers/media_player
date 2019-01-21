import React from "react";
import Bar from "./SideBar/Bar";
import SongList from "./SongList/SongList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="ui equal width grid">
        <Bar />
        <SongList />
      </div>
    </div>
  );
};

export default App;
