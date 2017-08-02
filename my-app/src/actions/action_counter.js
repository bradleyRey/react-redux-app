import redux from 'redux';

// ADD NUMBER

export const increment = counter => {

  return {
    type: 'INC',
    counter
  }
}

// REMOVE NUMBER


export const decrement = counter => {

  return {
    type: 'DEC',
    counter
  }
}
