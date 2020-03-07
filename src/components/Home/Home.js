import React, {Component} from 'react';
import { connect } from 'react-redux';

//App rendered to DOM
class Home extends Component {
    //What happens on page load
    componentDidMount() {

    }
    render() {
        return (
            <div className='Home'>
                <h1>Test</h1>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Home);
