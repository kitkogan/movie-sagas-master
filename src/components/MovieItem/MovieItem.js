import React, { Component } from 'react';


class MovieItem extends Component {
  //renders the app on the DOM
  render() {
      let movie = this.props.movie;
    return (
    //each movie item details displayed on DOM 
      <div className="MovieItem">
        <div className="moviePoster" onClick={()=>{this.props.toDetailsPage(movie.id)}}>
            <img src={movie.poster} alt={movie.title}></img>
        </div>  
        <h2>{movie.title}</h2>
      </div> 
    );
  }
}

export default MovieItem;