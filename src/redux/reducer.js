import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  UPDATE_TODO_STATUS,
  UPDATE_TODO_DES
} from "./actions";


import {todo} from "./states";

export let reducer = (state = todo, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state,todos:[...state.todos, action.payload]};
    case DELETE_TODO:
      return {...state,todos:state.todos.filter((todo) => todo.id !== action.payload)};
    case UPDATE_TODO_STATUS:
      return {...state,todos:  state.todos.map((todo) =>
        todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo
      )}
    ;
    case FILTER_TODO:
      return {...state,search:action.payload}
    case UPDATE_TODO_DES:
      return{...state,todos:state.todos.map((todo) =>
        todo.id === action.id ? {...todo, description: action.payload} : todo
      )}
      ;
    default:
      return state;
  }
};
