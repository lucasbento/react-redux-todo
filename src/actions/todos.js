import types from './actionTypes';

export const addTodo = text => ({
  type: types.ADD_TODO,
  text,
});

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text,
});

export const removeTodo = (id, text) => ({
  type: types.REMOVE_TODO,
  id,
});

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id,
});

export const completeAll = id => ({
  type: types.COMPLETE_ALL,
});

export const removeCompleted = id => ({
  type: types.REMOVE_COMPLETED,
});