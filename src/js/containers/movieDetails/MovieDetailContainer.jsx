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

    this.goBack = this.goBack.bind(this);
    this.more = this.more.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMovieInfo(this.props.match.params.id));
  }

  goBack() {
    this.props.histroy.goBack();
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

    if(str !== undefined){
        var blk = str.split(' ', 2);
    } else {
        var blk = '';
    }

    return (
        <div className='container-movieInfo'>
            <div id={movieInfo['imdbID']} className='movie-img-container'>
                <img className='poster' src={(movieInfo['Poster'] != 'N/A') ? movieInfo['Poster'] : '://via.placeholder.cohttpsm/170/000000/FFFFFF/?text=no_image'}></img>
            </div>
            <div className='information'>
                <div className='movie-title-container'>
                    <h2>{movieInfo['Title']}</h2>
                </div>
                <div className='style-border'>
                    <p><br/></p>
                </div>
                <div className='movie-plot-container'>
                    <div className='movieInfo'>
                        <h6>{movieInfo['Year']}</h6>
                        <h6>Rated: {movieInfo.Rated}</h6>
                        <h6>Runtime: {movieInfo.Runtime}</h6>
                        <h6><span style={{color: 'red'}}>Genre: </span><a onClick={this.more}>{(toggle == 'true') ? <span style={{color: 'green'}}>{blk}</span>: movieInfo.Genre}</a></h6>
                        <h6 style={(movieInfo.Metascore > 80) ? {color: 'green'} : (movieInfo.Metascore > 60) ? {color: 'yellow'} : {color: 'red'}}>Metascore: {movieInfo.Metascore}</h6>
                        <h6 style={(movieInfo.imdbRating > 8.0) ? {color: 'green'} : (movieInfo.imdbRating > 6.0) ? {color: 'yellow'} : {color: 'red'}}>imdb rating: {movieInfo.imdbRating}</h6>
                    </div>
                    <div className='plot'>
                        <p><span style={{color: 'red'}}>Plot:</span> {movieInfo.Plot}</p>
                        <p><span style={{color: 'red'}}>Actors:</span> {movieInfo.Actors}</p>
                    </div>
                </div>
                <div className='style-border'>
                    <p><br/></p>
                </div>
                <div>
                    <button onClick={this.goBack}>Back</button>
                </div>
            </div>
        </div>

    );
}
  // render() {
  //   const { movieInfo, toggle } = this.props;

  //   let str = movieInfo.Genre;

  //   if(str != undefined){
  //     var blk = str.split('', 2);
  //   } else {
  //     var blk = '';
  //   }

  //   return (
  //     <div className="container">
  //       <div>
  //         <button onClick={ this.goBack }></button>
  //       </div>
  //       <div className='image-container'>
  //         <img src={ (movieInfo['Poster']) } alt=""/>
  //       </div>
  //       <div>
  //         <h2>{ movieInfo['Title'] }</h2>
  //       </div>
  //       <div className="info-container">
  //         <h6>{ movieInfo['Year'] }</h6>
  //         <h6>{ movieInfo.Runtime }</h6>
  //         <h6>{ movieInfo.Rated }</h6>
  //         <h6>{ movieInfo.Genre }</h6>
  //         <h6>{ movieInfo.Metascore }</h6>
  //         <h6>{ movieInfo.imdbRating }</h6>
  //       </div>
  //       <div className="plot">
  //         <p>{ movieInfo.plot }</p>
  //       </div>
  //     </div>
  //   )
  // }
}

export default MovieDetailContainer;