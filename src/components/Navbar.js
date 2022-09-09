import React from 'react'
import logo from '../images/logo.svg'
import Button from '@mui/material/Button'
function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" className="logo"/>
      <div className="nav-links">
        <a href="">Features</a>
        <a href="">Company</a>
        <a href="">Career</a>
        <a href="">About</a>
      </div>
      <div className="login">
        <a href="">Login</a>
        <Button className="signup" variant='outlined'>Sign up</Button>
      </div>
    </div>
  )
}

export default Navbar