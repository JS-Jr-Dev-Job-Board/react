import React from 'react'
import { useRecoilValue, selector } from 'recoil'
import { Button } from '../styles/GlobalStyles'
import {
  Container,
  Card,
  Img,
  PositionText,
  DescriptionText
} from './JobStyles'

const url = `https://js-jr-dev-board.herokuapp.com/api/v1/jobs`

//fetch details here
const fetchJobDetails = selector({
  key: 'jobDetailsSelector',
  get: async ({ get }) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }
})

const JobCard = ({ jobCard }) => {
  const jobCards = useRecoilValue(fetchJobDetails)
  const jobsArr = jobCards.jobs

  return (
    <Container>
      {jobsArr.map((job) => {
        return (
          <Card>
            <Img src='https://via.placeholder.com/150' alt='' srcset='' />
            <PositionText>{job.position}</PositionText>
            <DescriptionText>{job.description}</DescriptionText>
            <Button>Apply</Button>
          </Card>
        )
      })}
    </Container>
  )
}

export default JobCard
