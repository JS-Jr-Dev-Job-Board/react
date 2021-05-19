import React from 'react'
import { Col, Row } from 'react-styled-flexboxgrid'
import { Container } from './DashboardStyles'

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col style={{ background: 'red' }} xs>
          one box
        </Col>
        <Col style={{ background: 'white' }} xs>
          two box
        </Col>
      </Row>
      <Row>
        <Col style={{ background: 'blue' }} xs>
          three box
        </Col>
        <Col style={{ background: 'orange' }} xs>
          four box
        </Col>
        <Col style={{ background: 'green' }} xs>
          five box
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
