import React from 'react'
import StarCard from './starredcard'
import { Grommet, Box, Grid, Heading } from 'grommet'
import { grommet } from 'grommet/themes'
//import GrommetTheme from "../theme/grommetTheme"

const Starred = ({ jobCard }) => {
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
          <StarCard />
        </Box>
      </Grid>
    </Grommet>
  )
}

export default Starred
