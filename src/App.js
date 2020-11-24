import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import Dagen from './Dagen.json';

const dagen=Dagen
console.log(dagen)
function MyApp() {
  const [value, onChange] = useState(new Date());
 
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={({ date }) => {for (let i = 0; i < dagen.length; i++) if(`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}` === dagen[i].date ){return dagen[i].name;}}}
        tileClassName={({ date }) => {for (let i = 0; i < dagen.length; i++) if(dagen[i].date === `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`){return "color";}}}
      />
    </div>
  );
}

export default MyApp;
