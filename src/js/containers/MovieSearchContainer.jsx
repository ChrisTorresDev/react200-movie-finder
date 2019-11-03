import React from 'react';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  onChange(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(displayMovie(value));
  }

  handleClick(e) {
    e.preventDefault()
    const { dispatch, movieTitle } = this.props;
    dispatch(getMovie(movieTitle));
  }

  render() {
    const { movieTitle } = this.props;
    return (
      <form>
        <div className="input-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Search for a Movie"
            value={ movieTitle }
            onChange={ this.onChange }
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-light"
              onClick={ this.handleClick }
              >Go!
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default MovieSearchContainer;