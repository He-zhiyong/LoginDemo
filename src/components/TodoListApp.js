// eslint-disable-next-line
import React, { Component } from 'react';
import '../styles/antd.css';
import '../styles/toDoList.css';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class TodoListApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {lists: []};
  }
  render() {
    return (
      <div className="toDoList">
        <h2 className="title">To do list</h2>
        <Todo onAdd={this.handleChange} lists={this.state.lists} />
        <List onDel={this.handleChange} lists={this.state.lists} />
      </div>
    );
  }
  handleChange(lists) {
    this.setState({lists: lists});
  }
}
class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.state = {text:''};
    }
  
    render() {
      return (
        <Form className="form" onSubmit={this.handleSubmit}>
          <FormItem>
            <Input className="input" placeholder="to do..." onChange={this.handleChange} value={this.state.text}/>
            <Button className="addBtn" type="primary" size="small" onClick={this.handleSubmit}>{'Add'}</Button>
            <Button className="clearBtn" type="danger" size="small" onClick={this.handleClear}>{'Clear'}</Button>
            <h3 className="text">{(this.props.lists.length+1) + '. '+ this.state.text}</h3>
          </FormItem>
        </Form> 
      );
    }
    handleChange(e){
      this.setState({text: e.target.value});
    }
    handleClear(e) {
      this.props.onAdd([]);
    }
    handleSubmit(e) {
      e.preventDefault();
      var newText = this.state.text.trim();
      if(newText){
        var lists = this.props.lists;
        var newList = {
          text: newText,
          id: Date.now()
        };
        lists.push(newList);
        this.props.onAdd(lists);
        this.setState({text:''});
      }
    }
}
class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    return (
      <ul className="list">
        {this.props.lists.map((list,index) => (
          <li key={index}>
            <h3 className="list-text">{(index+1) +'. '+list.text}</h3>
            <Button className="deleteBtn" type="danger" size="small" data-index={index} onClick={this.handleDelete}>{'Del'}</Button>                    
          </li>
        ))}
      </ul>
    );
  }
  handleDelete(e){
    var lists = this.props.lists;
    var index=e.target.getAttribute("data-index");
    lists.splice(index,1);
    this.props.onDel(lists)
  }
}
  
export default TodoListApp;