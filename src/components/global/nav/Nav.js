import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Ul, NavLinks, Li } from './NavStyles'
import { Button } from '../styles/GlobalStyles'
import { A } from '../styles/LinksGlobalStyles'

const Nav = () => {
  return (
    <Container>
      <h2>Career Shock</h2>
      <NavLinks>
        <Ul>
          <Li>
            <NavLink to='/' exact activeClassName='activeSelected'>
              <A>home</A>
            </NavLink>
          </Li>
          <Li>
            <NavLink to='/team' activeClassName='activeSelected'>
              <A>team</A>
            </NavLink>
          </Li>
          <Li>
            <NavLink to='/jobs' activeClassName='activeSelected'>
              <A>jobs</A>
            </NavLink>
          </Li>
          <Li>
            <NavLink to='/employers' activeClassName='activeSelected'>
              <A>employers</A>
            </NavLink>
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
