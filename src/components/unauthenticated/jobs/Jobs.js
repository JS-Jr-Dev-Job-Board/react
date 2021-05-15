import React from 'react'
import { Container } from './JobStyles'
import JobCard from '../../global/jobs/JobCard'
import { Button, SectionHeader, SectionContainer } from '../../global/styles/GlobalStyles'

const Jobs = () => {
  return (
    <SectionContainer column background='#d3d3d3'>
      <SectionHeader>Jobs</SectionHeader>
      <JobCard />
      <Button>Start/Apply</Button>
    </SectionContainer>
  )
}

export default Jobs
