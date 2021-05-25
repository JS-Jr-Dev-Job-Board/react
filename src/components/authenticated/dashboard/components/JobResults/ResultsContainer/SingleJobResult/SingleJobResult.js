import React from 'react'
import {
  JobResultRoot,
  JobTitle,
  JobType,
  DateListed,
  ApplyBtn
} from './StyleJobResults'

const SingleJobResult = ({ jobData: { title, type, date } }) => {
  return (
    <JobResultRoot>
      <JobTitle>{title}</JobTitle>
      <JobType>{type}</JobType>
      <DateListed>{date}</DateListed>
      <ApplyBtn>apply</ApplyBtn>
    </JobResultRoot>
  )
}

export default SingleJobResult
