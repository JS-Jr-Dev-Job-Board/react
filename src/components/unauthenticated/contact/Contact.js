import React from 'react'

import { MessageArea, Container, FormDiv, TextDiv, Text } from './ContactStyles'
import {
  Button,
  ViewHeader,
  Input,
  Form,
  Label,
} from '../../global/styles/GlobalStyles'

const Contact = (props) => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <TextDiv>
        <ViewHeader>Contact Us!</ViewHeader>
        <p>Have questions or inquires?</p>
        <Text>
          We've got your answers! Whether you're setting up your account,
          looking for your first job, your next job, or hoping to sponsor one of
          our upcoming hackathons, we'd love to hear from you!
        </Text>
      </TextDiv>
      <FormDiv>
        <Form onSubmit={submitHandler}>
          <Label htmlFor='name'>
            <Input id='name' placeholder='Name' small />
          </Label>
          <Label htmlFor='email'>
            <Input id='email' placeholder='Email' medium />
          </Label>
          <MessageArea placeholder="We can't wait to hear from you!" />
          <Button big>Submit</Button>
        </Form>
      </FormDiv>
    </Container>
  )
}

export default Contact
