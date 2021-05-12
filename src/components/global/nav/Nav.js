import React from 'react'
import { Container, Ul, NavLinks } from './NavStyles'
import { Button } from '../styles/GlobalStyles'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Container>
      <h2>Career Shock</h2>
      <NavLinks>
        <Ul>
          <Link to='/'>
            <li>home</li>
          </Link>
          <Link to='/team'>
            <li>team</li>
          </Link>
          <li>jobs</li>
          <li>employers</li>
        </Ul>
        <Button>login</Button>
        <Button>sign up</Button>
      </NavLinks>
    </Container>
  )
}

export default Nav
