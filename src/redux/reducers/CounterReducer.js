export const CounterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, count: state.count + 1 };
    case 'counter/decremented':
      return { ...state, count: state.count - 1 };
    case 'COUNTER_INCREAMENTED_BY_ACTION':
      return { ...state, count: state.count + action.payload };
    case 'COUNTER_DECREMENTED_BY_ACTION':
      return { ...state, count: state.count - action.payload };
    case 'COUNTER_SET':
      return { ...state, count: action.payload };
    case 'COUNTER_RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default CounterReducer;