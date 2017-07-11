import merge from 'lodash/merge';
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';

const _defaultState = {
  todos: {
    1: {
      id: 1,
      title: "take a shower",
      body: "and be clean",
      done: false
    }
  },
  steps: {
    1: { // this is the step with id = 1
      id: 1,
      title: "walk to store",
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: "buy soap",
      done: false,
      todo_id: 1
    }
  }
};

const todosReducer = (state=_defaultState,action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TODOS:
      let newstate = merge({},state);
      for (let i = 0; i < action.todos.length; i++) {
        newstate.todos[action.todos[i].id] = action.todos[i];
      }
      return newstate;
    case RECEIVE_TODO:
      newstate = merge({},state);
      newstate.todos[action.todo.id] = action.todo;
      return newstate;
    case REMOVE_TODO:
      newstate = merge({},state);
      delete newstate.todos[action.todo.id];
      return newstate;
    default:
      return state;
  }
};

export default todosReducer;
