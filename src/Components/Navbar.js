import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FiMenu, FiX} from 'react-icons/fi'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
        <div>
            <h1>TECH BUDDIES</h1>
        </div>
        <div className='nav-icons' onClick={()=>setOpen(!open)}>
            {!open ? <FiMenu/> : <FiX/>}
        </div>
        <div className={!open ? "navigation-links" : "navigation-links active"}
          onClick={()=>setOpen(false)}
        >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/add-employee'>Add Employee</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    </div>
  )
}
