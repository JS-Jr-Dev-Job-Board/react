import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Ul, NavLinks, Li } from './NavStyles'
import { Button } from '../styles/GlobalStyles'
import { GlobalNavLink } from '../styles/LinksGlobalStyles'


const Nav = () => {
  return (
    <Container>
      <h2>
        <GlobalNavLink to='/dashboard'>Career Shock, LLC</GlobalNavLink>
      </h2>
      <NavLinks>
        <Ul>
          <Li>
            <GlobalNavLink to='/' exact activeClassName='activeSelected'>
              home
            </GlobalNavLink>
          </Li>
          <Li>
            <GlobalNavLink to='/team' activeClassName='activeSelected'>
              team
            </GlobalNavLink>
          </Li>
          <Li>
            <GlobalNavLink to='/developers' activeClassName='activeSelected'>
              developers
            </GlobalNavLink>
          </Li>
          <Li>
            <GlobalNavLink to='/employers' activeClassName='activeSelected'>
              employers
            </GlobalNavLink>
          </Li>
        </Ul>
        <NavLink to='/login' activeClassName='buttonActiveSelected'>
          <Button>login</Button>
        </NavLink>
        <NavLink to='/register' activeClassName='buttonActiveSelected'>
          <Button>register</Button>
        </NavLink>
      </NavLinks>
    </Container>
  )
}

export default Nav
