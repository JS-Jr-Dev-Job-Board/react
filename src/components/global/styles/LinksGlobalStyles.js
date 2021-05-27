import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const A = styled.a`
  text-decoration: none;
  color: orange;
`
export const GlobalLink = styled(Link)`
  color: #aaa;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 820px) {
    margin-bottom: 30px;
  }
`
export const GlobalNavLink = styled(NavLink)`
  color: orange;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 820px) {
    margin-bottom: 30px;
  }
`
