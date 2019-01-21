import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../actions";
import "./SongList.css";

class SongList extends React.Component {
  renderSongs = props => {
    return this.props.songs.map(song => (
      <div
        onClick={() => this.props.selectSong(song)}
        key={song.id}
        className="song-list-item"
      >
        <p>{`${song.title}       ${song.artist} ${song.album}`}</p>
      </div>
    ));
  };

  render() {
    return <div className="ui thirteen wide column centered">{this.renderSongs()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs.songs };
};

export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongList);
