import React from "react";
import "./SideBar.css";

const Controller = () => {
  return (
    <div className="controller">
      <div className="centered">
        <div className="ui buttons">
          <button class="ui icon button">
            <i class="left chevron icon" />
          </button>
          <button className="ui button">
            <i className="play icon" />
          </button>
          <button class="ui icon button">
            <i class="right chevron icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controller;
