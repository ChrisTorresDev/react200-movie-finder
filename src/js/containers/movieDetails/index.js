import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
    movieInfo: store.detailRoot.movieInfo,
    toggle: store.detailRoot.toggle,
    listMovie: store.searchRoot.movie
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);