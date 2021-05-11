import React from 'react'
import { Container, Heading } from './JobStyles'
import JobCard from '../../global/jobs/JobCard'
import { Button } from '../../global/styles/GlobalStyles'

const Jobs = () => {
  return (
    <Container>
      <Heading>Jobs</Heading>
      <JobCard />
      <Button>Start/Apply</Button>
    </Container>
  )
}

export default Jobs
