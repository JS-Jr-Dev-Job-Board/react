import React from 'react'
import { useRecoilValue, selector } from 'recoil'

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

// console.log('fetch job details', fetchJobDetails)

function ApplicationCard({ jobCard }) {
  const jobCards = useRecoilValue(fetchJobDetails)
  console.log('HOOOOOO application data data', jobCards)
  return (
    <div>
      <div className='card'>
        <div>
          {Object.keys(jobCards).map((key) => {
            return (
              <div key={key}>
                {jobCards[key].map((jobs) => {
                  return (
                    <form>
                      <div>
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
                          <button>replacement from grommet button</button>
                        </div>
                      </div>
                    </form>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ApplicationCard
