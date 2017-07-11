import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = (props) =>{
  console.log(props);
  return (
    <div>
      <ul>
        {props.todos.map((todo)=>
          <TodoListItem key={todo.id} todo={todo} removeTodo={props.removeTodo}/>)
        }
      </ul>
      <TodoForm receiveTodo={props.receiveTodo} />
    </div>
);};

export default TodoList;
