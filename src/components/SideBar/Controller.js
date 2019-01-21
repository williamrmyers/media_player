import React from "react";
import { pause } from '../../actions';
import "./SideBar.css";

import { connect } from 'react-redux';



const Controller = (props) => {

  const icon = props.paused ? "play icon" : "pause icon";

  const disabled = !props.song.title ? "disabled" : null;

  return (
    <div className="controller">
        <div className="ui buttons">
          <button onClick={() => props.pause()} className={`${disabled} ui button inverted teal`}>
            <i className={icon} />
          </button>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    paused: state.paused,
    song: state.selectedSong
  }
}

export default connect(mapStateToProps, {
  pause: pause
})(Controller);
