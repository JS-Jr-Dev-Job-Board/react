import React from 'react'
import { useRecoilValue, selector } from 'recoil'
import { Button } from '../styles/GlobalStyles'
import { Img } from '../styles/GlobalStyles.js'
import { Container, Card, PositionText, DescriptionText } from './JobStyles'

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
            <div style={{border: '1px solid black', display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
              <Img src='https://via.placeholder.com/150' alt='' srcset='' />
            </div>
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
