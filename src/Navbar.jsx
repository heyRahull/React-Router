import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <div>
        <h3><Link to="/">Home</Link></h3>
      <h3><Link to="/about">About</Link></h3>
      <h3><Link to="/login">Login</Link></h3>
    </div>
  )
}

export default Navbar