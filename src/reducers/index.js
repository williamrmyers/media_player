import { combineReducers } from 'redux';
import faker from 'faker';

let songs = [];
for (var i = 0; i < 100; i++) {
  songs.push({title: faker.fake("{{lorem.word}}"), album: faker.fake("{{lorem.word}}"), artist: faker.fake("{{lorem.word}}")})
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

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
})
