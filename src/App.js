import React from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import { auth } from './firebase';
function App() {

const [{},dispatch]=useStateValue();



useEffect(()=>{
//will only run once when the app component loads....
auth.onAuthStateChanged(authUser=>{
  console.log('The User is >>>> ',authUser);
  if(authUser)
  {
      dispatch({
        type:'SET_USER',
        user:authUser   
      })
  }
  else{
    dispatch({
      type:'SET_USER',
      user:null
    })

  }
})

},[])

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
