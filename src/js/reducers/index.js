const defaultState = {
  movie_title: '',
  image: '',
  release_year: '',
  plot: '',
  runtime: '',
  genre: '',
  awards: '',
  metascore: '',
  imbdScore: '',
  movies: []
};

export default function mainReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    
    case 'GET_MOVIE': {
      return {
        ...state,
        movie_title: payload.data,
        image: payload.data,
        release_year: payload.data,
        plot: payload.data,
        runtime: payload.data,
        genre: payload.data,
        awards: payload.data,
        metascore: payload.data,
        imbdScore: payload.data,
        movies: [
          ...state.movies, 
          {
            movie_title: payload.data
          }
        ]
      };
    }

    case 'DISPLAY_MOVIE': {
      return {
        ...state,
        movie_title: movie_title
      };
    }

    default: {
      return state;
    }
  }
}
