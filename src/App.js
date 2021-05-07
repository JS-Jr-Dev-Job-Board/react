import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

//import components here:
import Nav from './components/global/nav/Nav'
import Team from './components/unauthenticated/team/Team'
import Landing from './components/unauthenticated/landing/LandingMain'
import Employers from './components/unauthenticated/employers/Employers'
import Developers from './components/unauthenticated/developers/Developers'
import Contact from './components/unauthenticated/contact/Contact'
import Footer from './components/global/footer/Footer'

import darkTheme from './theme/darkTheme'
import lightTheme from './theme/lightTheme'
import { Container } from './AppStyles'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const localTheme = localStorage.getItem('localTheme')
    localTheme === 'dark' ? setIsDarkTheme(true) : setIsDarkTheme(false)
  }, [])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    const localThemeVal =
      localStorage.getItem('localTheme') === 'dark' ? 'light' : 'dark'
    localStorage.setItem('localTheme', localThemeVal)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <>
          <header>
            <Nav />
          </header>
          <Container>
            <Switch>
              <Route path='/team'>
                <Team />
              </Route>
              <Route path='/developers'>
                <Developers />
              </Route>
              <Route path='/employers'>
                <Employers />
              </Route>
              {/* <Route path='/sign-in'>
                <SignIn />
              </Route>
              <Route path='/sign-up'>
                <SignUp />
              </Route> */}
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/'>
                <Landing />
              </Route>
            </Switch>
          </Container>
          <footer className='App-footer'>
            <Footer />
          </footer>
        </>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default App
