import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';
import ToDolist from './components/Todolist';
import './index.css';


ReactDOM.render(
  
  <React.StrictMode>
    
    <div className="title">To-do List </div>
    <div className="wrapper">
    <MyApp />
    <ToDolist />

    </div>
   
  </React.StrictMode>,
  
  document.getElementById('root')
);


