import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import './SongList.css';

class SongList extends React.Component {

  renderSongs = (props) => {
    console.log(this.props);
     return this.props.songs.map((song) => (
       <div onClick={() => this.props.selectSong(song)} key={song.title} className="ui segment song-list-item">
         <p><strong>{song.title}</strong>  {song.artist} - {song.album}</p>
       </div>
     )
   )
   }

  render() {
    // console.log('props',this.props);
    return (
      <div className="twelve wide column">
        {this.renderSongs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs.songs };
}

export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList);
