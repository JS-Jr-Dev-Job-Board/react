import React from 'react'

import { Form, Input, Label, MessageArea } from './ContactElements'
import { Button } from '../GlobalStyle'

const Contact = (props) => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Label htmlFor='name'>
          Name
          <Input id='name' placeholder='name' small />
        </Label>
        <Label htmlFor='email'>
          Email
          <Input id='email' placeholder='email' medium />
        </Label>
        <MessageArea />
        <Button big>Submit</Button>
      </Form>
      placeholder from src/components/Contact/Contact.js
      <h2>Contact Us!</h2>
      <p>
        quibusdam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Soluta autem eos amet enim totam molestiae recusandae, illo ab
        voluptatem sequi expedita facilis sapiente nihil laboriosam atque quo ea
        consectetur praesentium sint repellendus. Hic nostrum animi labore odio
        cumque quaerat expedita velit? Reiciendis voluptates sit maiores
        deserunt soluta praesentium laborum fuga tenetur!
      </p>
      placeholder from src/components/Contact/Contact.js
    </div>
  )
}

export default Contact
