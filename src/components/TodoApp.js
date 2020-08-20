import React from 'react';
import logo from '../logo.svg';
import { TodoList } from "./TodoList.js";
import '../App.css';

function TodoApp() {
  const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
          {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];

  return (
  <TodoList todoList={todos}></TodoList>
  );
}

export default TodoApp;