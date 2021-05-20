import React from 'react'
import { Container, Col, Row } from './DashboardStyles'
import Tracker from './components/Tracker/Tracker'

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
          { title: 'cover letters', number: 8 },
          { title: 'resume', number: 20 },
          { title: 'apply', number: 50 },
          { title: 'follow up', number: 20 }
        ]}
      />
      {/* rendering here for dev only */}
    </Container>
  )
}

export default Dashboard
