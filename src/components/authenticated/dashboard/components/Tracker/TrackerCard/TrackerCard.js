import React from 'react'
import {
  TrackerCardRoot,
  TrackerCardTitle,
  TrackerCardNumber
} from './TrackerCard.elements'

const TrackerCard = ({ data }) => {
  const cardTypes = [
    { title: 'coverLetters', color: '', bgColor: '' },
    { title: 'resume', color: '', bgColor: '' },
    { title: 'apply', color: '', bgColor: '' },
    { title: 'followUp', color: '', bgColor: '' }
  ]
  return (
    <TrackerCardRoot type={data.title}>
      <TrackerCardTitle>{data.title}</TrackerCardTitle>
      <TrackerCardNumber>{data.number}</TrackerCardNumber>
    </TrackerCardRoot>
  )
}

export default TrackerCard
