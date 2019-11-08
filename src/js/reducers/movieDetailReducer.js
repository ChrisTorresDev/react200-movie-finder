const defaultState = {
  movieInfo: [],
}

export default function detailReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'GET_MOVIE_INFO_FULFUILLED': {
      return {
        ...state,
        movieInfo: payload.data
      }
    }
    case 'UPDATE_TOGGLE': {
      return {
        ...state,
        toggle: payload.event
      }
    }
    default: {
      return state
    }
  }
}