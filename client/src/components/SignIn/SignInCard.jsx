import React from 'react'
import './SIstyles.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom'


function SignInCard() {
  return (
    <div className="card">
    <img src={logo} style={{ zIndex: 1, position: 'relative' }} className="logos1" />
    <h1 className='Title1'>StudySphere</h1>
    <input type="textbox" name="username" placeholder="USERNAME"/>
     <input type="password" name="password" placeholder="PASSWORD" className="t2"/>
     <p className="text11">*By signing-in you are agreeing to <Link to="/TnC" className="text12">Terms & Conditions</Link></p>
     <Link to ="/home"><button className="btn1">SIGN IN</button></Link>
     <Link to="/SignUp"><button className="btn2">SIGN UP</button></Link> 
  </div>

  )
}

export default SignInCard