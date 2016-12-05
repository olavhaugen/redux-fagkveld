const initialState = {
  todos: [],
  text: '',
};

const getNextId = (state) => Math.max(0, ...state.todos.map(t => t.id)) + 1;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEXT_CHANGED':
      return {
        ...state,
        text: action.text,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: getNextId(state), text: state.text }
        ],
        text: ''
      };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      };
  }
  return state;
};
