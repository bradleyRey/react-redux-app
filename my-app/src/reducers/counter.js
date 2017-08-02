
// Counter reducer that addds and removes a number when a button has been clicked

const Counter =  (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
      break;
    case 'DEC':
      return state - 1
      break;
    default:
      return state
  }
}

export default Counter
