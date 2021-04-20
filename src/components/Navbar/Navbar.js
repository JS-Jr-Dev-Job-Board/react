import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button/Button'
import { MenuItems } from './MenuItems'
import StyledNavbar from './StyledNavbar'

const Navbar = () => {
  const [on, setOpen] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setOpen(!on)
  }

  return (
    <StyledNavbar>
      <NavLink to='/'>
        <h1 className='NavbarLogo'>
          Jr Dev Jobs<i className='fab fa-react'></i>
        </h1>
      </NavLink>
      <div className='menu-icon' onClick={onSubmit}>
        <i className={on ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={on ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.cName} to={item.url}>
                {item.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <Button>Sign up</Button>
    </StyledNavbar>
  )
}

export default Navbar
