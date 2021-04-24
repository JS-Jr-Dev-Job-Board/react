// import "./css/App.css";
import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { testState } from './store/atom'
import { ThemeProvider } from 'styled-components'
//import components here:
import NavBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import darkTheme from './theme/darkTheme'
import lightTheme from './theme/lightTheme'
import InfoSection from './components/InfoSection/InfoSection'

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

  const [test, setTest] = useRecoilState(testState)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className='App'>
          <button onClick={toggleTheme}>toggle theme test</button>
          <header className='App-header'>
            <NavBar />
          </header>
          <main>
            <InfoSection />
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
