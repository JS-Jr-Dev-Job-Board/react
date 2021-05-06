import React from 'react'

//import components
import SearchBox from './SearchBox/SearchBox'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <SearchBox />
        </header>
      </div>
      <Testimonials />
    </>
  )
}

export default Home
