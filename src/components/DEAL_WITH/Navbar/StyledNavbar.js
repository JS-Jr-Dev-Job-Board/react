import styled from 'styled-components'

const StyledNavbar = styled.nav`
  background: ${(props) => props.theme.color.navBackground};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  a {
    text-decoration: none;
  }

  .NavbarLogo {
    color: #fff;
    justify-content: start;
    margin-left: 20px;
    cursor: pointer;
  }

  .fa-react {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: none;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-links {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  .nav-links:hover {
    background-color: ${(props) => props.theme.color.linkHover};
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  .fa-bars {
    color: ${(props) => props.theme.color.white};
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }
`
export default StyledNavbar
