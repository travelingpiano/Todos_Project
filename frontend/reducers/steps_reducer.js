import merge from 'lodash/merge';
import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions';

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

const stepsReducer = (state=_defaultState,action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_STEPS:
      let newstate = merge({},state);
      for (let i = 0; i < action.steps.length; i++) {
        newstate.steps[action.steps[i].id] = action.steps[i];
      }
      return newstate;
    case RECEIVE_STEP:
      newstate = merge({},state);
      newstate.steps[action.step.id] = action.step;
      return newstate;
    case REMOVE_STEP:
      newstate = merge({},state);
      delete newstate.steps[action.step.id];
      return newstate;
    default:
      return state;
  }
};

export default stepsReducer;
