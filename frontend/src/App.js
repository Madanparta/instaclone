import React from 'react';
import { useState } from 'react';
import LandingPage from './screen/LandingPage';
import MainLandingPage from './screen/MainLandingPage';
import InputForm from './screen/InputForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomeFunction = () =>{
  const [showSecondPage,setShowSecondPage]=useState(false);
  const funShowSecond =()=>{
    setShowSecondPage(true);
  }
  const funClearSecondPage=()=>{
    setShowSecondPage(false);
  }
  return(
    <>
    {
        showSecondPage?(
          <MainLandingPage funClearSecondPage={funClearSecondPage}/>
        ):(
          <LandingPage funShowSecond={funShowSecond}/>
        )
      }
    </>
  )
}

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeFunction/>}/>
          <Route path='/post' element={<InputForm/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App