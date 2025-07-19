
export const increaseCounter = () => {
  return {
    type: "counter/incremented"
  };
}

export const decreaseCounter = () => {
  return {
    type: "counter/decremented"
  };
}

export const resetCounter = () => {
  return {
    type: "COUNTER_RESET"
  };
}
export const incrementByValue = (value) => {
  return {
    type: "COUNTER_INCREAMENTED_BY_ACTION",
    payload: value
  };
}
export const decrementByValue = (value) => {
  return {
    type: "COUNTER_DECREMENTED_BY_ACTION",
    payload: value
  };
}
export const setCount = (value) => {
  return {
    type: "COUNTER_SET",
    payload: value
  };
}

