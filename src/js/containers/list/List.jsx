import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listMovie } = this.props;

    return (
      <div>
        {(listMovie == undefined) ? (<p style={{color: 'red'}}>Oops invalid search</p>): listMovie.map((movie, index) => (
          <li className='movie-movie' key={movie['imdbID']}>
            <div id={movie['imdbID']} className='movie-img-container'>
                <a href={`/#/movie/${movie['imdbID']}`}>
                  <img className='poster' src={(movie['Poster'] != 'N/A') ? movie['Poster'] : 'https://via.placeholder.com/170/000000/FFFFFF/?text=no_image'}></img>
                </a>
            </div>
            <div className='movie-img-container-2' style={(index % 2) ? { backgroundColor: 'rgba(127, 63, 191, 0.08)' } : { backgroundColor: 'rgba(255, 255, 255, 0.08)'}}>
              <div className='movie-title-container'>
                <h2>{movie['Title']}</h2>
                <h4>{movie['Year']}</h4>
              </div>
              <div className='movie-plot-container'>
                <p>
                  click poster for Movie details
                </p>
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
}