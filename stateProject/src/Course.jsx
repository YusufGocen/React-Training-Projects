import JavaScript from './reactProjeResim/js.png';
import React from './reactProjeResim/React.svg.png';
import Angular from './reactProjeResim/angular.png';
import Vue from './reactProjeResim/Vue.js_Logo_2.svg.png';
import './App.css'

const courseMap={
    JavaScript,
    React,
    Angular,
    Vue
}

function Course({courseName}) {
    console.log(courseMap[courseName]);
    return ( 
        <div className='images'>
            <img className='image' src={courseMap[courseName]}  />
        </div>
    );
}

export default Course;