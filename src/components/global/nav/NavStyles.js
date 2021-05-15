import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 3px solid #ccc;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 20px;
    outline: none;
    border: none;
    padding: 5px 20px;
  }
`
export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 35%;
`

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li {
    font-size: 20px;
    padding: 5px 10px;
  }
`

export const Li = styled.li``
