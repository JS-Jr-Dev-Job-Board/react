import React from 'react'
import StarCard from './starredcard'

const Starred = ({ jobCard }) => {
  return (
    <div>
      <h2>Job Board</h2>
      <div>
        <StarCard />
      </div>
    </div>
  )
}

export default Starred
