import React, {Component} from 'react';
import { connect } from 'react-redux';

//App rendered to DOM
class Home extends Component {
    //What happens on page load
    componentDidMount() {
        //Get function that fires on pageload
        //Gets all movies and displays on DOM
        this.getMovies();
    }

    //Func call to get movies
    getMovies = () => {
       this.props.dispatch({
           type: 'GET_MOVIES'    
       });
       console.log('get movies dispatch')   
    }
    // Func call to get movie details
    handleClick = (id) => {
        console.log('in handleClick');
        this.props.dispatch({
            type: 'GET_DEETS',
            payload: id
        });
        console.log('get deets dispatch OK');
        this.props.history.push('/details');   
    }

    render() {
        return (
            <div className="App">
                {this.props.reduxState.movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <p>{movie.title}</p>
                            <button><img src={movie.poster} alt="movie poster" onClick={() => this.handleClick(movie.id)} /></button>
                            {/* <p>{movie.description}</p>  */}
                        </div>
                        )
                    })}
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Home);
