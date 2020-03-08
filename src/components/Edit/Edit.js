import React, { Component } from 'react';
import {connect} from 'react-redux';


class Edit extends Component {
    //sets local state for newly edited fields
  state = {
    newTitle: '',
    newDescription: '',
    movieId: this.props.match.params.id
  }
  componentDidMount = ()=>{
     //dispatch to saga to then run get request and store in Redux
    this.props.dispatch({ type: 'GET_ONE_MOVIE', payload: this.props.match.params.id });
  }

  componentDidUpdate = (prevProps)=>{
    //when redux props update this will compare previous redux state to current and run accordingly
    if (this.props.reduxState.oneMovie !== prevProps.reduxState.oneMovie){
      const movie = this.props.reduxState.oneMovie;
      //set local state based on Redux state
      this.setState({
        newTitle: movie.title,
        newDescription: movie.description
      })
    }
  }


  handleChange = (propertyName, event)=>{
    //update local state as user inputs changes
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleSave = ()=>{
    //on clicking save: dispatch to saga to trigger post request that will update movie info
    this.props.dispatch({type: 'UPDATE_MOVIE', payload: this.state})
    //step back to details page
    this.props.history.goBack();
  }

  goBack = () => {
    //navagate back to previous page
    this.props.history.goBack();
}

  // Renders app on the DOM
  render() {
    return (
      <div className="Edit">
        <button onClick={this.goBack}>CANCEL</button>
        <button onClick={this.handleSave}>SAVE CHANGES</button>
        <br></br>
        <label> Update Movie Title: 
          <input className="title" type="text" value={this.state.newTitle} 
                 onChange={(event)=>{this.handleChange('newTitle', event)}}></input>
        </label>
        <br></br>
        <label>Update Movie Description: 
          <br></br>
          <textarea className="description" rows="6" type="text" value={this.state.newDescription} 
                 onChange={(event)=>{this.handleChange('newDescription', event)}}></textarea>
        </label>
          
      </div>
    );
  }
}

//redux shares state with props
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Edit);
