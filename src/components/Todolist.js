import React from "react";
import './Todolist.css';
import TodolistItem from './TodolistItem';
import { v4 as uuidv4 } from 'uuid';


const ToDoList=({ toDoDate, isShowing, inputValue, setInputValue, setTodos, todos }) => {

    // console.log(todos)

// Handlers

const inputHandler = (event) => {
    setInputValue(event.target.value)
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
};

const addTodo = () => {
    setTodos([...todos,{ text : inputValue , completed : false, id: uuidv4(), date: toDoDate }])
    console.log(todos);
    setInputValue('');
    // console.log(todos)
};

    return (
        <div className={`"todolistmain" ${isShowing ? "" : "hidden"}`} >
            
            <input onChange={inputHandler}  value={inputValue}  className="inputbox" type="text" id="myInput" >
            </input>
            <button onClick={addTodo} className="button" >Add task to my To-do list</button>
           {todos.map((todo) => (
               <TodolistItem todos={todos} todo={todo} setTodos={setTodos} todoItem={todo.text}  />  
               ))}
        </div>
    );
};

export default ToDoList;