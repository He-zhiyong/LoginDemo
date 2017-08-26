// eslint-disable-next-line
import React, { Component } from 'react';
import '../styles/antd.css';
import { Button } from 'antd';
import { Input } from 'antd';

class TodoListApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {items: [], text: ''};
    }
  
    render() {
      return (
        <div>
          <h3>ToDoList</h3>
          <form onSubmit={this.handleSubmit}>
            <Input placeholder="default size" onChange={this.handleChange} value={this.state.text}/>
            <Button type="primary" onClick={this.handleSubmit}>{'Add #' + (this.state.items.length + 1)}</Button>
          </form>
          <TodoList items={this.state.items} />
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({text: e.target.value});
    }
  
    handleSubmit(e) {
      e.preventDefault();
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      console.log(newItem)
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
}
  
class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
}
  
export default TodoListApp;