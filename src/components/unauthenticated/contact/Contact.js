import React from 'react'

import { MessageArea, Container, FormDiv, TextDiv, Text } from './ContactStyles'
import {
  Button,
  SectionHeader,
  Input,
  Form,
  Label,
  SectionContainer
} from '../../global/styles/GlobalStyles'

const Contact = (props) => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <SectionContainer background='#d3d3d3'>
      <TextDiv>
        <SectionHeader>Contact Us!</SectionHeader>
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
    </SectionContainer>
  )
}

export default Contact
