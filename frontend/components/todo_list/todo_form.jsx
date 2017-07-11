import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.changeBody = this.changeBody.bind(this);
  }

  changeTitle(event){
    this.setState({title: event.target.value});
  }

  changeBody(event){
    this.setState({body: event.target.value});
  }

  uniqueId() {
    return new Date().getTime();
  }

  submitItem(event){
    const todo = {};
    todo.id = this.uniqueId();
    todo.title = this.state.title;
    todo.body = this.state.body;
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Add New Todo Item</h2>
        <label>Title
          <input value={this.state.title} onChange={this.changeTitle}></input>
        </label>
        <label>Body
          <input value={this.state.body} onChange={this.changeBody}></input>
        </label>
        <button onClick={this.submitItem}>Add New Item</button>
      </div>
    );
  }
}

export default TodoForm;
