import { ADD_TODO, DELETE_TODO, GET_TODOS } from "../actions/types";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
