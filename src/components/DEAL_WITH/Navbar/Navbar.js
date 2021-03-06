import React, { useState, useEffect } from 'react'

// REACT ICONS
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

// GLOBAL STYLES
import { Button } from '../GlobalStyle'

// COMPONENT'S ELEMENTS
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './NavBarElements'

// import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              CAREER SHOCK
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='About'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='Developers'>Developers</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='Employers'>Employers</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='jobs'>Jobs</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact'>Contact</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>Sign Up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button fontBig primary>
                      Sign Up
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
  // ! This is Brian being scared. Delete this soon.
  //   return (
  //     <StyledNavbar>
  //       <Link to='/'>
  //         <h1 className='NavbarLogo'>
  //           Jr Dev Jobs<i className='fab fa-react'></i>
  //         </h1>
  //       </Link>
  //       <div className='menu-icon' onClick={onSubmit}>
  //         <i className={on ? 'fas fa-times' : 'fas fa-bars'}></i>
  //       </div>
  //       <ul className={on ? 'nav-menu active' : 'nav-menu'}>
  //         {MenuItems.map((item, index) => {
  //           return (
  //             <li key={index}>
  //               <NavLink className={item.cName} to={item.url}>
  //                 {item.title}
  //               </NavLink>
  //             </li>
  //           )
  //         })}
  //       </ul>
  //       <Button>Sign up</Button>
  //     </StyledNavbar>
  //   )
}

export default Navbar
