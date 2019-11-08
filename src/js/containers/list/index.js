import { connect } from 'react-redux';
import List from './List';

function mapStoreToProps(store) {
    return {
        listMovie: store.searchRoot.movie,
    };
}

export default connect(mapStoreToProps)(List);