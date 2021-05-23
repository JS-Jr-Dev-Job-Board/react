import React from 'react'
import { JobResultRoot, JobTitle, JobType, DateListed, ApplyBtn } from './StyleJobResults'

const SingleJobResult = ({jobData}) => {
  return (
    <JobResultRoot>
      <JobTitle>{jobData.title}</JobTitle>
      <JobType>{jobData.type}</JobType>
      <DateListed>{jobData.date}</DateListed>
      <ApplyBtn>apply</ApplyBtn>
    </JobResultRoot>
  )
}

export default SingleJobResult
