const defaultState = {
  value: '',
  movie: []
};

export default function movieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
      case 'DISPLAY_MOVIE': {
          return {
              ...state,
              value: payload.value
          };
      }
      case 'GET_MOVIE_FULFILLED': {
          return {
              ...state,
              movie: payload.data.Search
          };
      }
      default: {
          return state;
      }
  }
}