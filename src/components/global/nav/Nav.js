import React from 'react'
import { Container, Ul, NavLinks } from './NavStyles'

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
        <button>login</button>
        <button>sign up</button>
      </NavLinks>
    </Container>
  )
}

export default Nav
