import React, {Component} from 'react';
import { connect } from 'react-redux'


class Details extends Component {
    handleBackClick = () => {
        console.log('in handle click back')
        this.props.history.push('/');
    }

    handleEditClick = () => {
        this.props.history.push('/edit');
    }
    getGenres = () => {
        this.props.dispatch({ type: 'GET_GENRES', payload: this.props.match.params.id })
    }
    

    render() {
        return (
            <div className='App'>
                <h1>{this.props.reduxState.details.title}</h1>
                <button onClick={this.handleBackClick}>BACK TO LIST</button>
                <button onClick={()=>{this.handleEditClick(this.props.match.params.id)}}>EDIT</button>
                <img src={this.props.reduxState.details.poster} alt='movie poster' />
                <p>{this.props.reduxState.details.description}</p>
                
                <h4>Genres</h4>
            <ul>
                {this.props.reduxState.genres.map((genre, i)=>{
                return <li key={i}>{genre.name}</li>    
                })}
            </ul>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Details);