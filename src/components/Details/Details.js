import React, { Component } from 'react';
import {connect} from 'react-redux';
// import './Details.css';


class Details extends Component {
    componentDidMount = ()=>{
        this.getInfo();
    }

    getInfo = ()=>{
        // saga call to server call to get details for only this movie
        this.props.dispatch({ type: 'GET_ONE_MOVIE', payload: this.props.match.params.id })
        //saga call to server call to get generas that go with this movie
        this.props.dispatch({ type: 'GET_GENRES', payload: this.props.match.params.id })
    }

    goBack = ()=>{
        this.props.history.goBack();
    }

    goToEdit = (id)=>{
        this.props.history.push(`/edit/${id}`)
    }

  // Renders the entire app on the DOM
  render() {
    let movie = this.props.reduxState.oneMovie;
    return (
      
      <div className="Details">
        
        <button onClick={this.goBack}>BACK TO LIST</button>
        <button onClick={()=>{this.goToEdit(this.props.match.params.id)}}>EDIT</button>
        
        <div className="movieDetailsDiv">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
        </div>
    
        <div className="genres">
            <h4>Genres</h4>
            <ul>
                {this.props.reduxState.genres.map((genre, i)=>{
                return <li key={i}>{genre.name}</li>    
                })}
            </ul>
        </div>
      </div>
      
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Details);