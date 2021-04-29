import React from 'react'

import { Form, Input, Label } from './ContactElements'

const Contact = (props) => {
  return (
    <div>
      <Form>
        <Label htmlFor='name'>
          Name
          <Input id='name' />
        </Label>
        <Label htmlFor='email'>
          Email
          <Input id='email' />
        </Label>
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
