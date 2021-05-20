import React from 'react'
import TrackerCard from './TrackerCard/TrackerCard'
import { TrackerRoot, CardContainer, CardTitle } from './Tracker.elements'

const Applied = ({ data }) => {
  // expects a prop called 'data' which is an array of objects for each card
  return (
    <TrackerRoot>
      <CardTitle>Applied</CardTitle>
      <CardContainer>
        {data.map((card, i) => (
          <TrackerCard data={card} key={i} className={data.title} />
        ))}
      </CardContainer>
    </TrackerRoot>
  )
}

export default Applied
