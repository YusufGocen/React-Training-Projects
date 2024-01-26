import 'bulma/css/bulma.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './course'
import Js from './reactProjeResim/js.png'
import React from './reactProjeResim/React.svg.png'
import Vue from './reactProjeResim/Vue.js_Logo_2.svg.png'
import Angular from './reactProjeResim/angular.png'


function App(){

    return(
    
      <div className='app'>
        <section class="hero is-info">
              <div class="hero-body">
                  <p class="title">
                    JavaScript
                   </p>
            </div>
         </section>
         <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
                <Course image={Js} title="Javascript" 
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aspernatur. Voluptas expedita inventore minima maxime et veritatis quam, ipsum magnam hic eveniet nostrum vel, nulla dignissimos est, sequi fuga aut."/>
            </div>
            <div className='column'>
                  <Course image={React} title="React" 
                  description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aspernatur. Voluptas expedita inventore minima maxime et veritatis quam, ipsum magnam hic eveniet nostrum vel, nulla dignissimos est, sequi fuga aut."/>
            </div>
            <div className='column'>
                 <Course image={Vue}  title="Vue" 
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aspernatur. Voluptas expedita inventore minima maxime et veritatis quam, ipsum magnam hic eveniet nostrum vel, nulla dignissimos est, sequi fuga aut."/>
            </div>
            <div className='column'>                                 
                <Course image={Angular}  title="Angular" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aspernatur. Voluptas expedita inventore minima maxime et veritatis quam, ipsum magnam hic eveniet nostrum vel, nulla dignissimos est, sequi fuga aut."/>
            </div>
          </div>
        </div>
       </section> 
     
      </div>
    ) 
} 
 
export default App 
 