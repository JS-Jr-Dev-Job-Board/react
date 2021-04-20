import React from 'react'
import styled from 'styled-components'
//import components
import LoginBtn from './auth/LoginBtn'
import LogoutBtn from './auth/LogoutBtn'
// import SignIn from './auth/SignIn'
import SearchBox from './SearchBox/SearchBox'
import Testimonials from './Testimonials'

const ComingSoon = styled.h1`
  color: ${(pr) => pr.theme.primaryColor};
`
const Teaser = styled.p`
  color: ${(pr) => pr.theme.white};
`

const Home = () => {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <SearchBox />
          <ComingSoon>Future Home of Something Great</ComingSoon>
          <Teaser>Get Excited 😲</Teaser>
          <LoginBtn></LoginBtn>
          <LogoutBtn></LogoutBtn>
        </header>
      </div>
      <Testimonials />
    </>
  )
}

export default Home
