import React, { Component } from 'react';
import MovieItem from './../MovieItem/MovieItem'
import {connect} from 'react-redux';
// import './Home.css';


class Home extends Component {
    componentDidMount = () => {
        this.getMovies();
    }

    getMovies = ()=>{
        //sagas call to get all movies from server/db
        this.props.dispatch({ type: 'GET_MOVIES'});
    }

    goToDetails = (id)=>{
        this.props.history.push(`/details/${id}`)
    }

  // Renders the entire app on the DOM
  render() {
    return (
      
      <div>
        <div className="header">
            <h1>Movies</h1>
            <h2>click on a movie to view details</h2>
        </div>
        <div className="movieContainer">
            {/* map through each movie item from redux store to display on DOM */}
        {this.props.reduxState.movies.map((movie)=>{
            return <MovieItem key={movie.id} 
                              movie={movie}
                              goToDetails={this.goToDetails}/>
        })}
        </div>
      </div>
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);