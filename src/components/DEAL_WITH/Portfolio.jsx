import React from 'react'
import '../css/Portfolio.css'

const someUser = {
  firstName: 'Will',
  middleName: 'Stanley',
  lastName: 'Wearing',
  resumes: [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200'
  ],
  jobs: [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200'
  ],
  coverLetters: [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200'
  ]
}
// console.log(someUser.resumes)

const Portfolio = () => {
  return (
    <div className='YugeDiv'>
      <div className='Name'>
        <h2>
          {someUser.firstName} {someUser.middleName} {someUser.lastName}
        </h2>
        <h3 className='dashboardText'>My Dashboard</h3>
      </div>
      <div className='kindabigdiv'>
        <div className='wittleDiv'>
          <h4>Resumes</h4>
          {someUser.resumes.map((resume) => (
            <div>
              <img src={resume} alt='sum stuff' />
            </div>
          ))}
        </div>
        <div className='wittleDiv'>
          <h4>Jobs</h4>
          {someUser.jobs.map((jobs) => (
            <div>
              <img src={jobs} alt='sum stuff' />
            </div>
          ))}
        </div>
        <div className='wittleDiv'>
          <h4>Cover Letters</h4>
          {someUser.coverLetters.map((coverLetters) => (
            <div>
              <img src={coverLetters} alt='sum stuff' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

//need to build this over this weekend
