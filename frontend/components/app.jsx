import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

const App = ({store})=>{
  return (
    <div>
      <TodoListContainer />
    </div>
  );
};

export default App;
