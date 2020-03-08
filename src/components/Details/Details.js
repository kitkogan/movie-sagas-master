import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Details.css';


class Details extends Component {
    componentDidMount = ()=>{
        this.getDetails();
    }

    //get details for selected movie
    getDetails = ()=>{
        //saga call to get details for the selected movie
        this.props.dispatch({ type: 'GET_ONE_MOVIE', payload: this.props.match.params.id })
        //saga call to get generes for the selected movie
        this.props.dispatch({ type: 'GET_GENRES', payload: this.props.match.params.id })
    }

    //go back to home page when back button is clicked
    buttonClickBack = ()=>{
        this.props.history.goBack();
    }

    //go to edit the selected movie fields
    buttonClickEdit = (id)=>{
        this.props.history.push(`/edit/${id}`)
    }

  //renders the app on the DOM
  render() {
    let movie = this.props.reduxState.oneMovie;
    return (
      <div className="Details">
        <button onClick={this.buttonClickBack}>BACK TO LIST</button>
        <button onClick={()=>{this.buttonClickEdit(this.props.match.params.id)}}>EDIT</button>
        
        <div className="movieDetailsDiv">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
        </div>
    
        <div className="genres">
            <h4>Genres:</h4>
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

//redux shares state with props
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Details);