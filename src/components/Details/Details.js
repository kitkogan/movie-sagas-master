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

    render() {
        return (
            <div className='App'>
                <h1>{this.props.reduxState.details.title}</h1>
                <img src={this.props.reduxState.details.poster} alt='movie poster' />
                <p>{this.props.reduxState.details.description}</p>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Details);