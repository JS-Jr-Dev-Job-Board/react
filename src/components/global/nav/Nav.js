import React from 'react'
import { Container, Ul, NavLinks } from './NavStyles'
import { Button } from '../styles/GlobalStyles'

const Nav = () => {
  return (
    <Container>
      <h2>Career Shock, LLC</h2>
      <NavLinks>
        <Ul>
          <li>home</li>
          <li>team</li>
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
