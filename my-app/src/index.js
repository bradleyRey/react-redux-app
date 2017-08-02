/*import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

/////

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers/reducer'
import App from './App'

let store = createStore(Reducer)

render(
  <App
  store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import Reducer from './reducers/reducer'

const store = createStore(Reducer)

const render = () => ReactDOM.render(
  <App
  value={store.getState()}
  increment={() => store.dispatch({type: 'INC'})}
  decrement={() => store.dispatch({type: 'DEC'})}

  />,
  document.getElementById('root')
)

console.log(store.getState())
store.subscribe(render)
render()
