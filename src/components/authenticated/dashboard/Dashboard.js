import React from 'react'
import { Container, Col, Row } from './DashboardStyles'

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
    </Container>
  )
}

export default Dashboard
