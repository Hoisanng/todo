import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './TodolistItem.css';


const TodolistItem = ({ todoItem, setTodos, todos, todo }) => {


    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                // console.log("dit is de item ")
                // console.log(item)
                // console.log("dit is de todo ")
                // console.log(todo)
                
                if (item.id === todo.id) {    
                    item.completed = true;
                           
                    // return {
                    //     ...item,
                    //     completed: !item.completed
                    // };
                    
                }
                return item;
            })
        );
    }
  
    return (
        <div className="todocontainer">
            <li className= {todo.completed ? "streep" : "" } > {todoItem}</li>
            <div className="buttonwrapper">
                <button onClick={completeHandler}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <button onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
        
    )
}
export default TodolistItem
