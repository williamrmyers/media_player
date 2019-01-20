import React from "react";
import "./SideBar.css";

const Controller = () => {
  return (
    <div className="controller">
      <div className="centered">
        <div className="ui buttons ">
          <button className="ui icon button inverted teal">
            <i className="left chevron icon" />
          </button>
          <button className="ui button inverted teal">
            <i className="play icon" />
          </button>
          <button className="ui icon button inverted teal">
            <i className="right chevron icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controller;
