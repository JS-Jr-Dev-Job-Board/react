import React from 'react'
import { JobHeaderRoot } from '../StyleJobResults'

const DisplayHeader = (props) => {
  return (
    <JobHeaderRoot>
      <h6>job title</h6>
      <h6>job type</h6>
      <h6>date listed</h6>
      <h6>apply</h6>
    </JobHeaderRoot>
  )
}

export default DisplayHeader
