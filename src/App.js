// import "./css/App.css";
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { testState } from './store/atom'
import { ThemeProvider } from 'styled-components'
//import components here:
import NavBar from './components/Navbar/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Footer from './components/Footer/Footer'

import darkTheme from './theme/darkTheme'
import lightTheme from './theme/lightTheme'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
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
            <SignIn />
            <SignUp />
          </main>
          <Footer/>
        </div>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default App
