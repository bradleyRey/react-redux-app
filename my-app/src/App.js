import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Testing from './components/test'
import Main from './components/main'
import { BrowserRouter, Switch, Route, Router, withRouter, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className='title'>My React-Redux Page</h2>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
