import React from 'react'
import {
  TrackerCardRoot,
  TrackerCardTitle,
  TrackerCardNumber
} from './TrackerCard.elements'

const TrackerCard = ({ data }) => {
  return (
    <TrackerCardRoot type={data.title} bgColor={data.bgColor}>
      <TrackerCardTitle>{data.title}</TrackerCardTitle>
      <TrackerCardNumber>{data.number}</TrackerCardNumber>
    </TrackerCardRoot>
  )
}

export default TrackerCard
