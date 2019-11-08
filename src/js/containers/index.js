import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    movieTitle: store.searchRoot.value,
    listMovie: store.searchRoot.movie
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);