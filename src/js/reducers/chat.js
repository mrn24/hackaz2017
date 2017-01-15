const initialState = {
  messages: [{ text: 'test', id: 'abcd123' }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_NOTHING':
      return state;
    default:
      return state;
  }
};

export default reducer;
