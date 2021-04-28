import React from 'react'
// import styled from 'styled-components'
//import components
// import LoginBtn from './auth/LoginBtn'
// import LogoutBtn from './auth/LogoutBtn'
// import SignIn from './auth/SignIn'
import SearchBox from './SearchBox/SearchBox'
import Testimonials from './Testimonials'
import HomePage from '../HomePage/Homepage'
import GetStarted from './GetStarted/Getstarted'
// import { homeObjOne } from '../HomePage/Data'

/*const ComingSoon = styled.h1`
  color: ${(pr) => pr.theme.primaryColor};
`
const Teaser = styled.p`
  color: ${(pr) => pr.theme.white};
`*/

const Home = () => {
  return (
    <>
      <SearchBox />
      <HomePage />
      {/* <homeObjOne /> */}
      <GetStarted />
      <Testimonials />
    </>
  )
}

export default Home
