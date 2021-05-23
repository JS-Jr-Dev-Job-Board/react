import React from 'react'
import { Container, Col, Row } from './DashboardStyles'
import Tracker from './components/Tracker/Tracker'
import SingleJobResult from './components/SingleJobResult/SingleJobResult'

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} sm={6} md={8} lg={10}>
          one box
        </Col>
        <Col xs={6} sm={6} md={8} lg={10}>
          two box
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={6} md={8} lg={10}>
          one box
        </Col>
        <Col xs={6} sm={6} md={8} lg={10}>
          two box
        </Col>
      </Row>

      {/* rendering here for dev only */}
      <Tracker
        data={[
          { title: 'cover letters', number: 8, bgColor: '#008080' },
          { title: 'resume', number: 20, bgColor: '#C45EFF' },
          { title: 'apply', number: 50, bgColor: '#86E374' },
          { title: 'follow up', number: 20, bgColor: '#E29873' }
        ]}
      />
      {/* rendering here for dev only */}

      {/* rendering here for dev only */}
      <SingleJobResult jobData={{title: 'software engineer', type: 'node', date: '5/23/2021'}}/>
      <SingleJobResult jobData={{title: 'front end developer', type: 'react', date: '5/18/2021'}}/>
      {/* rendering here for dev only */}
    </Container>
  )
}

export default Dashboard
