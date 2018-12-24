import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo.js';
import AddTodo from './Components/AddTodo.js';

class App extends Component {
  state = {
    todos: ['Eat lunch']
  }
  addTodo = e => {
    e.preventDefault();
    const newTodo = document.querySelector('.newTodo').value;
    if (newTodo.length == 0) {
      document.querySelector('.msg').innerHTML = 'Please type something in';
    }else {
      const randomNum = Math.floor(Math.random() * Math.floor(4));
      let randomColor = '';
      switch(randomNum) {
        case 0:
          randomColor = "#F05858";
          break;
        case 1: 
          randomColor = "#588BF0";
          break;
        case 2:
          randomColor = "#58F05A";
          break;
        case 3:
          randomColor = "#EEF058";
          break;
      }
      document.querySelector('.msg').innerHTML = '';
      let currentTodos = this.state.todos;
      currentTodos.unshift(newTodo);
      this.setState({todos:currentTodos});
      document.querySelector('.AddTodo').style.borderColor = randomColor;
    }
  }
  removeTodo = index => {
    let currentTodos = this.state.todos;
    currentTodos.splice(index, 1);
    this.setState({todos:currentTodos});
  }
  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo}/>
        <div className="TodoContainer">
          {this.state.todos.map((todo, index) => {
            return <Todo removeTodo={() => this.removeTodo(index)} text={todo}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
