import React from 'react'
import './Signin.css'
import {NavLink} from 'react-router-dom';

const Login = () => {
  return (
    <div className="signin">
        <NavLink to="/" href="/">
            <img className='signin_icon' src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="logo" />
        </NavLink>
        <form action="" className="container">
            <p style={{fontSize:28, paddingBottom: 10}}>Create Account</p>
            <p style={{fontSize:13, fontWeight: 'bold'}}>Your Name</p>
            <input className="signin_email" type="text"/>
            <p style={{fontSize:13, fontWeight: 'bold'}}>Mobile Number</p>
            <input className="signin_email" type="text"/>
            <p style={{fontSize:13, fontWeight: 'bold'}}>Email</p>
            <input className="signin_email" type="text"/>
            <p style={{fontSize:13, fontWeight: 'bold'}}>Password</p>
          <input className="signin_email" type="password" placeholder="Atleast 6 characters"/>
          <p style={{fontSize:12, padding: '0 0 10px 5px' }}>Password must be at least 6 characters.</p>
          <button className="cont">Continue</button>
          <p style={{fontSize:12, padding: '10px 0' }}>Already have an account? &nbsp;
            <NavLink to="/signin" href="/signin">Sign In</NavLink> 
          </p>
        </form>
      
    </div>
  )
}

export default Login



// import React from 'react'

// function Login() {
//   return (
    
//   )
// }

// export default Login
