// import "./css/App.css";
import React, { useState, useEffect } from 'react'
// import { useRecoilState } from 'recoil'
// import { testState } from './store/atom'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

//import components here:
import NavBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AboutUs from './components/AboutUs'
import Jobs from './components/Jobs/Jobs'
import Portfolio from './components/Portfolio'
import DevDashboard from './components/devdash/DevDashboard'
import Home from './components/Home'

import darkTheme from './theme/darkTheme'
import lightTheme from './theme/lightTheme'
import InfoSection from './components/InfoSection/InfoSection'
//import HomePage from './components/HomePage/Homepage'


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

  // const [test, setTest] = useRecoilState(testState)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className='App'>
          <button onClick={toggleTheme}>toggle theme test</button>
          <header className='App-header'>
            <NavBar />
            <InfoSection />
          </header>
          <main>
            <Switch>
              <Route path='/about'>
                <AboutUs />
              </Route>
              <Route path='/jobs'>
                <Jobs />
              </Route>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route path='/dev-dash'>
                <DevDashboard />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
            <SignIn />
            <SignUp />
          </main>
          <footer className = 'App-footer'>
            <Footer />
          </footer>
        </div>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default App
