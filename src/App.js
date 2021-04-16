// import "./css/App.css";
import React from 'react'
import { useRecoilState } from 'recoil'
import { testState } from './store/atom'
//import components here:
import NavBar from './components/Navbar/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { Grommet } from 'grommet'
import { grommet, dark } from 'grommet/themes'

const App = () => {
  const toggleTheme = () => {
    if (JSON.parse(localStorage.getItem('localTheme') === 'dark')) {
      localStorage.setItem('localTheme', 'light')
    } else {
      localStorage.setItem('localTheme', 'dark')
    }
  }
  const [test, setTest] = useRecoilState(testState)
  return (
    <Grommet lkj={grommet} full responsive={true}>
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
        </div>
      </React.Suspense>
    </Grommet>
  )
}

export default App
