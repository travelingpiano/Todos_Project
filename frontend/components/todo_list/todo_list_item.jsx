import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor({todo, removeTodo}) {
    super();
    this.todo = todo;
    this.removeTodo = removeTodo;
    this.todoUpdate = this.todoUpdate.bind(this);
    this.revealdetails = this.revealdetails.bind(this);
    this.state = {
      done: "undo",
      detail: false,
      detailbuttonname: "Reveal",
      details: ""
    };
  }



  todoUpdate(event) {
    if (this.state.done === "undo") {
      this.setState({
        done: "Done"
      });
    } else {
      this.setState({
        done: "undo"
      });
    }

  }

  revealdetails(event){
    this.setState({detail: this.state.detail===true ? false : true});
    this.setState({detailbuttonname: this.state.detail===true ? "Hide" : "Reveal" });
    if(this.state.detail){
      this.setState({details: <TodoDetailView todo={this.todo} removeTodo={this.removeTodo}/>});
    }else{
      this.setState({details: ""});
    }
  }

  render() {
    return (
    <li>
      {this.todo.title}
      <button onClick={this.todoUpdate}>{this.state.done}</button>
      <button onClick={this.revealdetails}>
        {this.state.detailbuttonname}
      </button>
      {this.state.details}
    </li>
  );}
}



export default TodoListItem;
