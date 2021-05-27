import React from 'react'
import JobCard from '../../global/jobs/JobCard'
import { Header, Container } from './JobStyles'

const Jobs = () => {
  return (
    <Container column background='#d3d3d3'>
      <Header>Jobs</Header>
      <JobCard />
    </Container>
  )
}

export default Jobs
