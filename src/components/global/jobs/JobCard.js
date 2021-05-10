import React from 'react'
import { useRecoilValue, selector } from 'recoil'
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
          </Card>
        )
      })}
      {/* console.log('fetching data', jobCards)
  return (
    <Container>
      {Object.keys(jobCards).map((key) => {
        console.log('keys', key)
        return (
          <div key={key}>
            {jobCards[key].map((jobs) => {
              console.log('jobs', jobs)
              return (
                <div>
                </div>
                <form>
                  <h2>{jobs.companyName}</h2>
                  <div>
                    <div>
                      <h3>Position: {jobs.position}</h3>
                    </div>
                    <div>
                      <h3>Salary: {jobs.salary}</h3>
                    </div>
                    <div>
                      <h3> Location: {jobs.location}</h3>
                    </div>
                    <h3>Job Description:</h3>
                    <p>{jobs.description}</p>
                  </div>
                  <div className='JobCardApply'>
                    <button>replacement for grommet</button>
                  </div>
                </form>
              )
            })}
          </div>
        )
      })} */}
    </Container>
  )
}

export default JobCard
