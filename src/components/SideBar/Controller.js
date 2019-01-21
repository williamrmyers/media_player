import React from "react";
import { pause } from '../../actions';
import "./SideBar.css";

import { connect } from 'react-redux';



const Controller = (props) => {
  const icon = props.paused ? "play icon" : "pause icon";

  return (
    <div className="controller">
      <div className="centered">
        <div className="ui buttons ">
          <button onClick={() => props.pause()} className="ui button inverted teal">
            <i className={icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { paused: state.paused }
}

export default connect(mapStateToProps, {
  pause: pause
})(Controller);
