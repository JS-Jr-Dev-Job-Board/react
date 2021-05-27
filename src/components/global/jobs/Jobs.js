import React from 'react'
import JobCard from './jobcard'

const Jobs = ({ jobCard }) => {
  return (
    <div>
      {/* // <Grommet theme={grommet}> */}
      {/* <Heading align='center' justify='center' textAlign='center'>
        Job Board
      </Heading> */}
      {/* <h2>Job board heading</h2> */}
      {/* <Grid
        gap='medium'
        pad={{ horizontal: 'xxlarge' }}
        responsive='true'
        align='center'
        columns='large'
        flex='true'
        // rows="flex"
        // rows="small">
        >
        <Box
          direction='column'
          justify='around'
          margin='medium'
          pad={{ horizontal: 'xxlarge' }}
          responsive='true'
          animation='zoomIn'
          > */}
      <JobCard />
      {/* </Box> */}
      {/* </Grid> */}
      {/* // </Grommet> */}
    </div>
  )
}

export default Jobs
