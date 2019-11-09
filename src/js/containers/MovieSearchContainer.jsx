import React from 'react';
import Axios from 'axios';
import List from './list';


export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.enterKey = this.enterKey.bind(this);
  }

  onChange(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(displayMovie(value));
  }

  handleClick(e) {
    e.preventDefault();
    const { dispatch, movieTitle } = this.props;
    dispatch(getMovie(movieTitle));
  }

  enterKey() {
    if(event.keyCode == 13) {
      this.clickHandler();
    }
  }

  render() {

    const { movieTitle } = this.props;

    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a Movie"
          onKeyDown={ this.enterKey }
          value={ movieTitle }
          onChange={ this.onChange }
        />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-light"
            onClick={ this.handleClick }
          >Submit
          </button>
        </div>
        <div className="list">
          <ul>
            <List />
          </ul>
        </div>
      </div>
    )
  }
}

export const displayMovie = (value) => ({
    type: 'DISPLAY_MOVIE',
    payload: { value }
});

export const getMovie = (movieTitle) => ({
    type: 'GET_MOVIE',
    payload: Axios.get(`/movieInfo/${movieTitle}&plot=short`)
});