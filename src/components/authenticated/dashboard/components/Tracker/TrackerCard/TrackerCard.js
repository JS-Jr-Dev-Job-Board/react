import React from 'react'
import { TrackerCardRoot } from './TrackerCard.elements'

const TrackerCard = ({ data }) => {
  console.log(data)
  return (
    <TrackerCardRoot bgColor={'#ff00ff'}>
      <p>{data.title}</p>
      <p>{data.number}</p>
    </TrackerCardRoot>
  )
}

export default TrackerCard
