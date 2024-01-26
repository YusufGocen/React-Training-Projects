
import { useState } from 'react'
import Course from './Course';
import './App.css';

function GetRandom(){
  const courseArray=['JavaScript','React','Angular','Vue'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {
  
  const [course, setcourse] = useState([]) 
  const Click=()=>{
    setcourse([...course,GetRandom()]);
  }
  const courseList= course.map((course,index)=>{
    return <Course key={index} courseName={course}/>
  })
  return ( 
  <div className='App'>
    <button onClick={Click}>Ekle</button>
    <div className='courseList'>{courseList }</div>
    
  </div> );
}

export default App;