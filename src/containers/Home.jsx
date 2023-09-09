import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Login from './Login'
 

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}   />  
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  )
}

export default Home