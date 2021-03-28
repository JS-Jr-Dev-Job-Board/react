import React, { useState } from 'react'
import { Box, Tab, Tabs, Text, Image } from 'grommet';
import { DevTabItems } from './DevTabItems';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import '../../css/DevDashBar.css'
import Jobs from '../Jobs/Jobs';
import Applications from './Applications/Applications'
import Starred from './Starred/Starred'


const DevDashBar = () => {
    const [on, setOpen] = useState(false)

    const onSubmit = (e) => {
      e.preventDefault()
      setOpen(!on)
    }
    return (
        <Router>
            <nav className = "DevDashBarItems">
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
                    ###starred component###
                    -things you should be able to do:
                    --- view jobs from "search" that youve saved
                    --- countdown time from moment you've saved the job, will clear afte XX hours
                </Route>
                <Route path='/dev-dash/active'>
                    ****ACTIVE APPLICATIONS COMPONENT****
                    -things you should be able to do:
                    --- view card per application:
                    ----- timer to next stage (interview in..., reply to email within....,)
                    ----- record notes on interview
                    ----- view/search for resources on specific libraries, terms, etc.

                </Route>
                <Route path='/dev-dash/applied'>
                    /\/\/\/applied applications archive\/\/\/\
                    -things you should be able to do:
                    --- view old resumes / applications
                </Route>
                <Route path='/dev-dash/stats'>
                    !!STATS COMPONENT!!
                    -things you should be able to do:
                    --- view stats (nos. appls submitted, avg time to first contact, etc)
                    --- edit your profile info, resume, and search prefs
                </Route>
            </Switch>
        </Router>
    )
}

export default DevDashBar

