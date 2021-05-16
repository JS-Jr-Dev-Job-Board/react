import React from 'react'
import JobCard from '../../global/jobs/JobCard'
import { SectionHeader, SectionContainer } from '../../global/styles/GlobalStyles'

const Jobs = () => {
  return (
    <SectionContainer column background='#d3d3d3'>
      <SectionHeader>Jobs</SectionHeader>
      <JobCard />
    </SectionContainer>
  )
}

export default Jobs
