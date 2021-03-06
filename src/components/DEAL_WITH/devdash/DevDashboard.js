import React from 'react'
import DevDashBar from './DevDashBar'

const DevDashboard = () => {
    return (
        <div>
            <DevDashBar />
        </div>
    )
}

export default DevDashboard


// TASKS // PLAN
//
// see wireframes: https://whimsical.com/portfolio-app-VgmmDLN2WBqj4eD4YFyHoc
// see user flow: https://whimsical.com/code-shock-EAXyLkhSRaMStLSgNDftUf
//
// 1. "My Dashboard" tabs
// -- 5 tabs
    // - FE: tabs display page/section (series of lists / cards) on click 
    // ------> each tab has notification chip with # of items within each tab's list
    // - BE: series of routes/models displaying different stored user data
    // ----------- see note in DevTabItems.js

// -- search:
    // ---- list of jobs 
    // based on prefs
    // - FE: list of potential jobs
    // - BE: connection to scraper
    // **NOTE: jobs component placeholder is already built in repo**

// -- starred:
    // ---- list of jobs 
    // saved from search
    // - FE: list of tabs- tabs
    // display cards on click
    // ---> attach countdown timer 
    // to starred job
    // - BE: connection 
    // to backend user 
    // info table column marked starred
    // ---->start countdown in timer column

// -- applied:
    // ---- list of jobs 
    // marked "applied"
    // - FE: list of tabs of applied job 
    // app archive display card of each applied job
    // ----> start count up timer from when applied
    // - BE: connection to backend user 
    // info table column marked applied

// -- active:
    // ---- list of jobs 
    // marked "active"
    // - FE: list of tabs of jobs where active responses ongoing display each job on click
    // -----> time until next interaction
    // --- arrange list by next interaction
    // - BE: connection 
    // to backend user info table column marked active

// -- stats:
    // ---- list of stats / data about job search
    // - FE: series of user stats (numbers of applications, pending avg. length to first response, )
    // - BE: connection to backend user 
    // info table column marked applied









