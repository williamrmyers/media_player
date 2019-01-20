import { combineReducers } from 'redux';

const songs = [
  {title: "Minted", album: "Minted", artist: "star slinger"},
  {title: "Extra Time", album: "Minted", artist: "star slinger"},
  {title: "Gimmie", album: "Minted", artist: "star slinger"},
];

const songsReducer = () => {
  return {
    songs: songs
  }
}

const selectSongReducer = (state={}, action) => {
  switch(action.type) {
    case 'SELECT_SONG':
      return {...action.payload};
    default:
      return state;
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
})
