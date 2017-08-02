import React, { Component } from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types'
import Reducer from '../reducers/reducer'

class Main extends Component {
  constructor(props){
    super(props);

  }
  render(){
    const {value, incrementCounter, decrementCounter} = this.props
    return(
      <div>
        <p>Helooo</p>
        <div>
          <div className='counterWrapper'>
            <p>{value}</p>
            <button className='INC' onClick={incrementCounter}>+</button>
            <button className='DEC' onClick={decrementCounter}>-</button>
          </div>
        </div>
      </div>
    )
  }
}


export default Main
