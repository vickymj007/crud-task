import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1>TECH BUDDIES</h1>
        </div>
        <div className='navigation-links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/add-employee'>Add Employee</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    </div>
  )
}
