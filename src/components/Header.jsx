import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <>

      <nav className='navbar'>
        <NavLink className='link' to='home'>Home</NavLink>
        <NavLink className='link' to='users'>Users</NavLink>
        <NavLink className='link' to='usage'>Usage</NavLink>
        <NavLink className='link' to='contact'>Contact</NavLink>
        <NavLink className='link' to='about'>About</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Header