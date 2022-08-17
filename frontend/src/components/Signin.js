import React from 'react'
import './Signin.css'
import {NavLink} from 'react-router-dom';

const Signin = () => {
  return (
    <div className="signin">
        <NavLink to="/" href="/">
          <img className='signin_icon' src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="logo" />
        </NavLink>
        <div className="container">
          <p style={{fontSize:28, paddingBottom: 10}}>Sign-In</p>
          <p style={{fontSize:13, fontWeight: 'bold'}}>Enter Email</p>
          <input className="signin_email" type="email"/>
          <button className="cont">Continue</button>
          <p style={{fontSize:12, padding: '10px 0' }}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        </div>
        <h5 style={{fontSize:12, padding: '10px 0', fontWeight: 'light', color: '#7c7c7c'}}>New to Amazon?</h5>
        <NavLink to="/login" href="/login">
          <button className="create">Create your Amazon account</button>
        </NavLink>
    </div>
  )
}

export default Signin



// import React from 'react'

// function Signin() {
//   return (
    
//   )
// }

// export default Signin
