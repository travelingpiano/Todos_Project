export const allTodos = state => {
  console.log(state);
  return Object.keys(state.todos).map(id => state.todos[id]);
};

export const filteredSteps = (state,todoId) => {
  console.log(state);
  let ans = [];
  for(let key in state.steps){
    if(state.steps[key].todo_id===todoId){
      ans.push(state.steps[key]);
    }
  }
  return ans;
};
