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
          <li><NavLink to="/user/about" className='link'>About</NavLink></li>
          <li><NavLink to="/user/login" className='link'>Login</NavLink></li>
          <li><NavLink to="/tutorial" className='link'>Tutorials</NavLink></li>
          <li><NavLink to="/products" className='link'>Products</NavLink></li>
          <li><NavLink to="/products/list" className='link'>List</NavLink></li>
        </ul>
       </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Navbar