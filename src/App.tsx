import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Navigation from "./components/Navigation"
import Background from "./components/Background"

import Profile from "./components/Pages/Profile"
import ComingSoon from "./components/Pages/ComingSoon"

function App() {
  const location = useLocation()
  const currentAddress = location.pathname

  const navigator = ()=>{
    let links = document.querySelectorAll('.bi')!
    const backgroundColored = document.querySelectorAll('.point')!
    const shoeBack = document.querySelector('.shoe-back')!
    const api = process.env.REACT_APP_DB_URL
    console.log(api)
    links.forEach(link => {
      link.id == currentAddress? link.classList.add('active'):link.classList.remove('active')
    })
    switch (currentAddress){
      case '/':
        shoeBack.classList.remove('hide')
        break
      case '/tasks':
        shoeBack.classList.add('hide')
        break
      case '/top':
        shoeBack.classList.add('hide')
        break
      case '/store':
        shoeBack.classList.add('hide')
        break
      case '/stake':
        shoeBack.classList.add('hide')
        break
      default:
        break
    }
    
  }

  useEffect(() => {
    navigator()
  },[currentAddress])

  return (
    <div className="App">
        <Background/>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path='/tasks' element={<ComingSoon/>}/>
          <Route path='/top' element={<ComingSoon/>}/>
          <Route path='/store' element={<ComingSoon/>}/>
          <Route path='/stake' element={<ComingSoon/>}/>
          <Route path='/*' element={<ComingSoon/>}/>
        </Routes>
        <Navigation/>
    </div>
  );
}

export default App;
