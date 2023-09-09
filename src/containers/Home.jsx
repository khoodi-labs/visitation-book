import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Login from './Login'
import Dashboard from './Dashboard';
 
 
 

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}   />  
        <Route path="/dashboard/*"  Component={Dashboard}  />  
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  )
}

export default Home