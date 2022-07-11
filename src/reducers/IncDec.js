const initialState = 0;
const changeValue = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;
    // case "INCREASE":return state+1;
    case "DECREASE":
      return state >= action.payload ? state - action.payload : state;
    default:
      return state;
  }
};

export default changeValue;
