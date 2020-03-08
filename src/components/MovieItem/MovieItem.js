import React, { Component } from 'react';


class MovieItem extends Component {

  // Renders the entire app on the DOM
  render() {
      let movie = this.props.movie;
    return (
    //   each movie item details to display 
      <div className="MovieItem">
        <div className="movieImage" onClick={()=>{this.props.goToDetails(movie.id)}}>
            <img src={movie.poster} alt={movie.title}></img>
        </div>  
        <h2>{movie.title}</h2>
      </div>
      
    );
  }
}

export default MovieItem;