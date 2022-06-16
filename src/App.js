import React from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
function App() {
  return (
    
    
    <Router>
      <div className="app">
      <Header />
      <Routes>
        <Route path="/login"element={<Login />} />
        <Route path="*" element={<><Header /> <Home/></>}/>
        <Route exact path="/checkout" element={ <><Header /> <Checkout/></>}/>
      </Routes>
    
    </div>
  </Router>
 
  );
}

export default App;
