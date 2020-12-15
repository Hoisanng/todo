import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';
import './index.css';


ReactDOM.render(
  
  <React.StrictMode>
    
    <div className="title">To-do List </div>
    <div className="wrapper">
    <MyApp />

    </div>
   
  </React.StrictMode>,
  
  document.getElementById('root')
);


