import { combineReducers } from 'redux';
import movieSearchReducer from './reducers/movieSearchReducer';
import movieDetailReducer from './reducers/movieDetailReducer';

const rootReducer = combineReducers({
  searchRoot: movieSearchReducer,
  detailRoot: movieDetailReducer
});

export default rootReducer;