import React from 'react'
// import styled from 'styled-components'
//import components
// import LoginBtn from './auth/LoginBtn'
// import LogoutBtn from './auth/LogoutBtn'
// import SignIn from './auth/SignIn'
import SearchBox from './SearchBox/SearchBox'
import Testimonials from './Testimonials'
import Footer from './Footer/Footer'
import HomePage from '../HomePage/Homepage'
import GetStarted from './GetStarted/Getstarted'
import InfoSection from './InfoSection/InfoSection'
import { homeObjOne } from '../HomePage/Data'

/*const ComingSoon = styled.h1`
  color: ${(pr) => pr.theme.primaryColor};
`
const Teaser = styled.p`
  color: ${(pr) => pr.theme.white};
`*/

const Home = () => {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <SearchBox />

          <HomePage />
          <homeObjOne />
          <InfoSection />
          <GetStarted />
        </header>
      </div>
      <div className='App'>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </div>
      <Testimonials />
    </>
  )
}

export default Home
