import React, {Component} from 'react';
import { connect } from 'react-redux'


class Details extends Component {
    handleBackClick = () => {
        console.log('in handle click back')
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='App'>
                <h1>{this.props.reduxState.details.title}</h1>
                <img src={this.props.reduxState.details.poster} alt='movie poster' />
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Details);