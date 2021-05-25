import React from 'react'
import { Container, Col, Row } from './DashboardStyles'
import Tracker from './components/Tracker/Tracker'
import JobResults from './components/JobResults/JobResults'

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

      <Tracker
        data={[
          { title: 'cover letters', number: 8, bgColor: '#008080' },
          { title: 'resume', number: 20, bgColor: '#C45EFF' },
          { title: 'apply', number: 50, bgColor: '#86E374' },
          { title: 'follow up', number: 20, bgColor: '#E29873' }
        ]}
      />

      <JobResults />
    </Container>
  )
}

export default Dashboard
