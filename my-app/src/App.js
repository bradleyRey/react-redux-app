import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Testing from './components/test'
import Main from './components/main'
import { BrowserRouter, Switch, Route, withRouter, Redirect} from 'react-router-dom';

const App = () => (
  <div className='App'>
    <Routes />
  </div>
)

const Routes = () => (
  <main>
    <Switch>
      <Route exactpath='/' component={AppTest}/>
      <Route exactpath='/text' component={Testing}/>
    </Switch>
  </main>
)
class AppTest extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className='title'>Welcome to React</h2>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
