import React, {Component} from 'react';
import { connect } from 'react-redux'


class Details extends Component {
    render() {
        return (
            <div className='Details'>
                <h1>Test</h1>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Details);