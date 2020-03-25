import { todosAPI } from "../../shared/todosAPI";

const todosContext = todosAPI();

const allTodosObj = todosContext.getAll();
const allTodos = Object.keys(allTodosObj).map(i => allTodosObj[i]);

const initialState = {
  todos: allTodos
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodos = Object.keys(state.todos).map(i => state.todos[i]);
      if (action.payload.parentId !== 0) {
        let key = 0;
        Object.keys(newTodos).map(i => {
          if (newTodos[i].id.toString() === action.payload.parentId) {
            key = i;
          }
        });
        newTodos[key].subtodos.push(action.payload.todo);
      } else {
        newTodos.push(action.payload.todo);
      }

      return {
        ...state,
        todos: newTodos
      };

    case "MODIFY_TODO":
      const editTodos = Object.keys(state.todos).map(i => state.todos[i]);

      let keyM = 0;
      Object.keys(editTodos).map(i => {
        if (editTodos[i].id === action.payload.todo.id) {
          keyM = i;
        }
      });

      editTodos[keyM] = action.payload.todo;

      return {
        ...state,
        todos: editTodos
      };

    case "REMOVE_TODO":
      const removeTodos = Object.keys(state.todos).map(i => state.todos[i]);
      let key = 0;
      Object.keys(removeTodos).map(i => {
        if (removeTodos[i].id === action.payload.id) {
          key = i;
        }
      });
      removeTodos.splice(key, 1);
      return {
        ...state,
        todos: removeTodos
      };

    default:
      return state;
  }
};

export default todosReducer;
