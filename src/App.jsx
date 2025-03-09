import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import { Home } from './Component/Home';
import { PostPage } from './Component/PostPage';
import { Navbar } from './Component/Navbar';
function App() { 
   return(
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/postpage' element={<PostPage/>}/>
      </Routes>
     </Router>
   )
}

export default App;

