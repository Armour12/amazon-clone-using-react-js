import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'
function Login() {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signIn=e=>{
    e.preventDefault()
    
    }
    const register=e=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth);
        });
    }
        
    return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className='login__signInButton' onClick={signIn} type="submit">Sign In</button>

            </form>
            <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register}
            className='login__registerButton'>Create Your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login