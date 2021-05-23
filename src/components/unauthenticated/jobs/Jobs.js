import React from 'react'
import JobCard from '../../global/jobs/JobCard'
import { Container } from './JobStyles'
import { SectionHeader } from '../../global/styles/GlobalStyles'

const Jobs = () => {
  return (
    <Container>
      <SectionHeader>Jobs</SectionHeader>
      <JobCard />
    </Container>
  )
}

export default Jobs
