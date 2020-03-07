import React, {Component} from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    render() {
        return (
            <div className='Edit'>
                <h1>Test</h1>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Edit);
