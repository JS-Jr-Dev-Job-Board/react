import React, { useState } from 'react'
import { DevTabItems } from './DevTabItems'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../../css/DevDashBar.css'
import Jobs from '../Jobs/Jobs'
// import Applications from './Applications/Applications'
// import Starred from './Starred/Starred'

const DevDashBar = () => {
  const [on] = useState(false)

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   setOpen(!on)
  // }
  return (
    <Router>
      <nav className='DevDashBarItems'>
        <ul className={on ? 'nav-menu active' : 'nav-menu'}>
          {DevTabItems[0].map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title} ({item.notifications})
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* <nav>
                <Tabs>
                    
                {DevTabItems[0].map((item, index) => {
                      return (
                        <Tab title={item.title}>
                          <Box pad="medium" href={item.url}>
                            this is the page of {item.title}
                          </Box>
                        </Tab>
                      )
                    })}
                </Tabs>
            </nav> */}

      <Switch>
        <Route path='/dev-dash/search'>
          <Jobs />
        </Route>
        <Route path='/dev-dash/starred'>
          <div>
            <ul>###starred component###</ul>
            <ul>-things you should be able to do:</ul>
            <ul>--- view jobs from "search" that youve saved</ul>
            <ul>
              --- countdown time from moment you've saved the job, will clear
              afte XX hours
            </ul>
          </div>
        </Route>
        <Route path='/dev-dash/active'>
          <ul>****ACTIVE APPLICATIONS COMPONENT****</ul>
          <ul>-things you should be able to do:</ul>
          <ul>--- view card per application:</ul>
          <ul>
            ----- timer to next stage (interview in..., reply to email
            within....,)
          </ul>
          <ul>----- record notes on interview</ul>
          <ul>
            ----- view/search for resources on specific libraries, terms, etc.
          </ul>
        </Route>
        <Route path='/dev-dash/applied'>
          <ul>/\/\/\/applied applications archive\/\/\/\</ul>
          <ul>-things you should be able to do:</ul>
          <ul>--- view old resumes / applications</ul>
        </Route>
        <Route path='/dev-dash/stats'>
          <ul>!!STATS COMPONENT!!</ul>
          <ul>-things you should be able to do:</ul>
          <ul>
            --- view stats (nos. appls submitted, avg time to first contact,
            etc)
          </ul>
          <ul>--- edit your profile info, resume, and search prefs</ul>
        </Route>
      </Switch>
    </Router>
  )
}

export default DevDashBar
