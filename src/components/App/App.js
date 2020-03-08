import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './../Home/Home';
import Details from './../Details/Details';
import Edit from './../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          {/* route renders Details component and passes through navagation props(match and history) to use in those routes */}
          <Route path="/details/:id" render={(navProps)=>(
            <Details 
              match={navProps.match}
              history={navProps.history}/>
          )}></Route>
          {/* route renders Edit component and passes through navagation props(match and history) to use in those routes */}
          <Route path="/edit/:id" render={(navProps)=>(
            <Edit 
              match={navProps.match}
              history={navProps.history}/>
          )}></Route>
        </div>
      </Router>
    );
  }
}
export default App;