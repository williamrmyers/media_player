import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../actions";
import "./SongList.css";

class SongList extends React.Component {
  renderSongs = props => {
    return this.props.songs.map(song => (
      <tr
        key={song.id}
        className={ this.props.selectedSong.title === song.title ? "playing song-list-item" : "song-list-item"}
        >
          <td onClick={() => this.props.selectSong(song)}>{song.title}</td>
          <td>{song.artist}</td>
          <td>{song.album}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="ui thirteen wide column centered">
        <table>
          <div className="song-list">
            <tr className="song-list-item">
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
            </tr>
            {this.renderSongs()}
          </div>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs.songs,
    selectedSong: state.selectedSong
   };
};

export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongList);
