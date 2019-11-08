import React from 'react';
import axios from 'axios'; 

export const getMovieInfo = (movieID) => ({
  type: 'GET_MOVIE_INFO',
  payload: axios.get(`/movie/${movieID}`)
});

export const changeToggle = (event) => ({
  type: 'UPDATE_TOGGLE',
  payload: { event }
});

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.backButton = this.backButton.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMovieInfo(this.props.match.params.id));
  }

  backButton() {
    this.props.histroy.backButton();
  }

  more() {
    const { dispatch, toggle } = this.props;
    if(toggle == 'true') {
      dispatch(changeToggle('false'));
    } else {
      dispatch(changeToggle('true'));
    }
  }

  render() {
    const { movieInfo, toggle } = this.props;

    let str = movieInfo.Genre;

    if(str != undefined){
      var blk = str.split('', 2);
    } else {
      var blk = '';
    }

    return (
      <div className="container">
        <div>
          <button onClick={ this.backButton }></button>
        </div>
        <div className='image-container'>
          <img src="" alt=""/>
        </div>
        <div>
          <h2>{ movieInfo.movieTitle }</h2>
        </div>
        <div className="info-container">
          <h6>{ movieInfo.releaseYear }</h6>
          <h6>{ movieInfo.runtime }</h6>
          <h6>{ movieInfo.rating }</h6>
          <h6>{ movieInfo.genre }</h6>
          <h6>{ movieInfo.metascore }</h6>
          <h6>{ movieInfo.imdbscore }</h6>
        </div>
        <div className="plot">
          <p>{ movieInfo.plot }</p>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;