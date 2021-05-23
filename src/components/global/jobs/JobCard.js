import React from 'react'
import { useRecoilValue, selector } from 'recoil'
import { Button } from '../styles/GlobalStyles'
import { Img } from '../styles/GlobalStyles.js'
import {
  Container,
  Card,
  PositionText,
  DescriptionText,
  ImgContainer
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
            <ImgContainer>
              <Img src='https://via.placeholder.com/150' alt='' srcset='' />
            </ImgContainer>
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
