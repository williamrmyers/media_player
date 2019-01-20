import React from 'react';
import Controller from './Controller';
import { connect } from 'react-redux';
import './SideBar.css'

class CurrentSong extends React.Component {

  renderSong = () => {
    if (!this.props.song) {
      return ("--");
    } else {
      return (this.props.song);
    }
  }

  render() {
    return(
      <div className="current-song">
        Playing: {this.renderSong().title}
        <Controller />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(CurrentSong);
