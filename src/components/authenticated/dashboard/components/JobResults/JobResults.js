import React from 'react'
import DisplayHeader from './Header/DisplayHeader'
// import ResultsContainer from './ResultsContainer/ResultsContainer'
import { JobResultsRoot } from './StyleJobResults'
import SingleJobResult from './ResultsContainer/SingleJobResult/SingleJobResult'

import mockData from './mockData.json'
console.log('mockData', mockData)

const JobResults = (props) => {
  return (
    <JobResultsRoot>
      <DisplayHeader />
      {mockData.map((ad) => {
        console.log(ad)
        return (
          <SingleJobResult
            jobData={{
              title: ad.title,
              type: ad.type,
              date: ad.date
            }}
          />
        )
      })}
      {/* <ResultsContainer /> */}
    </JobResultsRoot>
  )
}

export default JobResults

{
  /* 
<SingleJobResult
jobData={{
  title: 'front end developer',
  type: 'react',
  date: '5/18/2021'
}}
/> */
}
