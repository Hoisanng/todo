import React, { useState } from "react";
import './Todolist.css';
import TodolistItem from './TodolistItem';
import { v4 as uuidv4 } from 'uuid';



function ToDolist() {
// States
const [inputValue , setInputValue] = useState('')
const [todos, setTodos] = useState([]); 

// Handlers

const inputHandler = (event) => {
    setInputValue(event.target.value)
}

const addTodo = () => {
    setTodos([...todos,{ text : inputValue , completed : false, id: uuidv4()  }])
    setInputValue('');
}


    return (
        <div className="todolistmain">
            
            <input onChange={inputHandler}  value={inputValue}  className="inputbox" type="text" id="myInput" >
            </input>
            <button onClick={addTodo} className="button" >Add task to my To-do list</button>
           {todos.map((todo) => (
             <TodolistItem todos={todos} todo={todo} setTodos={setTodos} todoItem={todo.text}  />  
           ))}
        </div>
    );
}

export default ToDolist;

