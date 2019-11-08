import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
    movieInfo: store.detailsRoot.movieInfo,
    toggle: store.detailsRoot.toggle,
    listMovie: store.searchRoot.movie
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);