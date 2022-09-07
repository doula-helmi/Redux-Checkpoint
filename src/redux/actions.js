export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FILTER_TODO = "FILTER_TODO";
export const UPDATE_TODO_STATUS = "UPDATE_TODO_STATUS";
export const UPDATE_TODO_DES = "UPDATE_TODO_DES";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function filterDONE(isDone) {
  return {
    type: FILTER_TODO,
    payload: isDone,
  };
}

export function updateTodoStatus(id) {
  return {
    type: UPDATE_TODO_STATUS,
    payload: id,
  };
}

export function updateTodoDes(id,description) {
  return {
    type: UPDATE_TODO_DES,
    payload: description,
    id: id
  };
}

