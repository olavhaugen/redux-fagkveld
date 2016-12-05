const initialState = {
  text: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        text: '',
      };
    case 'TEXT_CHANGED':
      return {
        ...state,
        text: action.text,
      };
  }
  return state;
};
