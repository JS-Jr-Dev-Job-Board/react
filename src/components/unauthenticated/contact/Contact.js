import React from 'react'

import { MessageArea } from './ContactStyles'
import {
  Button,
  ViewHeader,
  StyledView,
  Input,
  Form,
  Label,
} from '../../global/styles/GlobalStyles'

const Contact = (props) => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <StyledView>
      <ViewHeader>Contact Us!</ViewHeader>
      <p>Have questions or inquires?</p>
      <p>
        We've got your answers! Whether you're setting up your account, looking
        for your first job, your next job, or hoping to sponsor one of our
        upcoming hackathons, we'd love to hear from you!
      </p>
      <Form onSubmit={submitHandler}>
        <Label htmlFor='name'>
          Name
          <Input id='name' placeholder='name' small />
        </Label>
        <Label htmlFor='email'>
          Email
          <Input id='email' placeholder='email' medium />
        </Label>
        <MessageArea placeholder="We can't wait to hear from you!" />
        <Button big>Submit</Button>
      </Form>
    </StyledView>
  )
}

export default Contact
