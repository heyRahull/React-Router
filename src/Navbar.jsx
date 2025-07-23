import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
      <div className='header'>
       <div><Link to="/" className='link'><h2>Logo</h2></Link></div>
       <div>
        <ul>
          <li><NavLink to="/about" className='link'>About</NavLink></li>
          <li><NavLink to="login" className='link'>Login</NavLink></li>
          <li><NavLink to="/tutorial" className='link'>Tutorials</NavLink></li>
        </ul>
       </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Navbar