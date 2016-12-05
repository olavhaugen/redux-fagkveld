const initialTodos = [];

const getNextId = (todos) => Math.max(0, ...todos.map(t => t.id)) + 1;

export default (todos = initialTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        { id: getNextId(todos), text: action.text }
      ];
    case 'TOGGLE_COMPLETE':
      return todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
  }
  return todos;
};
