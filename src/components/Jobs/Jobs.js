import React from 'react'
import JobCard from './jobcard'
import { Grommet, Box, Grid, Heading } from 'grommet'
import { grommet } from 'grommet/themes'
//import GrommetTheme from "../theme/grommetTheme"

const Jobs = ({ jobCard }) => {
  return (
    <Grommet theme={grommet}>
      <Heading align='center' justify='center' textAlign='center'>
        Job Board
      </Heading>
      <Grid
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
        >
          <JobCard />
        </Box>
      </Grid>
    </Grommet>
  )
}

export default Jobs
