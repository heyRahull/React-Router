import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='header'>
       <div><Link to="/" className='link'><h2>Logo</h2></Link></div>
       <div>
        <ul>
          <li><Link to="/about" className='link'>About</Link></li>
          <li><Link to="login" className='link'>Login</Link></li>
          <li><Link to="/tutorial" className='link'>Tutorials</Link></li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar