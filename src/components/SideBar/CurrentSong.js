import React from 'react';
import { connect } from 'react-redux';
import './SideBar.css'

class CurrentSong extends React.Component {

  render() {

    if (!this.props.song.title) {
      return (<div className="current-song">--</div>);
    }

    return(
      <div className="current-song">
        <img className="album-art" src={this.props.song.albumArt} alt="Album Art" height="69" width="69" />
        <div className="current-song-title">Playing: {this.props.song.title}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(CurrentSong);
