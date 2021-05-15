import React from 'react'
import { Container, Heading, Button } from './JobStyles'
import JobCard from '../../global/jobs/JobCard'

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
