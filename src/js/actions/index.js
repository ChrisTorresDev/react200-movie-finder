import axios from 'axios';

export function getMovie(movie_title) {
  return {
    type: 'GET_MOVIE',
    payload: axios.get(`/movieInfo/:inputValue`)
  };
}

export function displayMovie() {
  return {
    type: 'DISPLAY_MOVIE',
    payload: { Movies }
  };
}