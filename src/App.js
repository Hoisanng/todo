import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import Dagen from './Dagen.json';
import ToDoList from './components/Todolist';
import { v4 as uuidv4 } from 'uuid';


function MyApp() {
  // State
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [toDoDate, setToDoDate] = useState(new Date());
  const [isShowing, setIsShowing] = useState(false);
  
//  console.log(todos)

  // Handlers

  const onChangeHandler = (date) => {
    setToDoDate(formatDate(date));
    // console.log(setToDoDate);
    // console.log(date)
  };
  const clickHandler = (date) => {
    if (formatDate(date) === toDoDate) {
      setIsShowing(!isShowing);
    }
    
    // console.log(formatDate(date))
    // console.log(toDoDate)
  };

  const formatDate = (date) => { return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`; };
  
  return (
    <div>
      <Calendar
        // value={toDoDate}
        onClickDay={clickHandler}
        onChange={onChangeHandler}
        tileContent={({ date }) => { for (let i = 0; i < Dagen.length; i++) if (formatDate(date) === Dagen[i].date) { return Dagen[i].name; } }}
        tileClassName={({ date }) => { for (let i = 0; i < Dagen.length; i++) if (Dagen[i].date === formatDate(date)) { return "color"; } }}
        
         />

        < ToDoList isShowing={isShowing} inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default MyApp;
