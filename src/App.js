import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodolistHeader from './TodolistHeader';
import TodoList from './TodoList';

class App extends Component{

  render(){

    return (
      <div className="App"> 
        <TodolistHeader/>
        <TodoList />

      </div>
    );
  }
}





export default App;
