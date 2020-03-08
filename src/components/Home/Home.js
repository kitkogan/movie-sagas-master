import React, { Component } from 'react';
import MovieItem from './../MovieItem/MovieItem'
import {connect} from 'react-redux';
import './Home.css';

//What will fire on page load
//getMovies function
class Home extends Component {
    componentDidMount = () => {
        this.getMovies();
    }

    //getMovied function
    getMovies = () => {
        //sagas call to get all movies from server/db
        this.props.dispatch({ type: 'GET_MOVIES'});
    }

    //function brings user to detaill page when poster is clicked
    toDetailsPage = (id) => {
        this.props.history.push(`/details/${id}`)
    }

  // Renders the app on the DOM
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
                              toDetailsPage={this.toDetailsPage}/>
        })}
        </div>
      </div>
    );
  }
}

//using redux to share state with props
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);