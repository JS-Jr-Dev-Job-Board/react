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
<<<<<<< HEAD
import InfoSection from './InfoSection/InfoSection'
//import { homeObjOne } from '../HomePage/Data'
=======
// import { homeObjOne } from '../HomePage/Data'
>>>>>>> 5e862e6a82c9c207059bbdc9daeae8fcd701128b

/*const ComingSoon = styled.h1`
  color: ${(pr) => pr.theme.primaryColor};
`
const Teaser = styled.p`
  color: ${(pr) => pr.theme.white};
`*/

const Home = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <SearchBox />
      <HomePage />
      {/* <homeObjOne /> */}
      <GetStarted />
>>>>>>> 5e862e6a82c9c207059bbdc9daeae8fcd701128b
      <Testimonials />
    </>
  )
}

export default Home
