import React from 'react'
import { Link, Outlet, NavLink } from 'react-router'
import './Tutorial.css'

const Tutorial = () => {
  return (
    <div className='tutorial' style={{textAlign:'center'}}>
        <h1>Tutorials</h1>
        <ul>
            <li><NavLink to="react" className={({isActive})=>isActive ? 'custom-active link' : 'link'}>ReactJs</NavLink></li>
            <li><NavLink to="javascript" className={({isActive})=>isActive ? 'custom-active link' : 'link'}>Javascript</NavLink></li>
            <li><NavLink to="node" className={({isActive})=>isActive ? 'custom-active link' : 'link'}>NodeJs</NavLink></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Tutorial