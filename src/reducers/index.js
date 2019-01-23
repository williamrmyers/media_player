import { combineReducers } from 'redux';
import faker from 'faker';

let songs = [];
for (var i = 0; i < 200; i++) {
  songs.push({
    title: `${faker.fake("{{lorem.word}}")} ${faker.fake("{{lorem.word}}")}`,
    album: faker.fake("{{lorem.word}}"),
    artist: faker.fake("{{lorem.word}}"),
    id: i,
    albumArt:  faker.fake("{{image.image}}")
  });
}

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

const pauseReducer = (state=true, action) => {
  switch(action.type) {
    case 'SELECT_SONG':
      return false;
    case 'PAUSE':
      return state? false : true;
  default:
      return state;
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
  paused: pauseReducer
});
