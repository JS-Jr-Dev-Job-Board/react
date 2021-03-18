import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Grommet,
  Form,
  Heading,
  Image,
  FormField,
  Grid
} from 'grommet'
import { grommet } from 'grommet/themes'

//Image Imports
import tempSigninImage from '../../assets/tempSigninImage.jpg'

/****** TO DO: ******
  - Add verification that passwords match
    - logic
    - implement error message if not matching 
    - disable submit if not matching? or let them hit submit, but then error with message?
  - Hook it up, fix links
  - Verify grommet done correctly?
******/

const initialValues = {
  email: '',
  password: '',
  passwordVerify: ''
}

const SignUp = () => {
  const [form, setForm] = useState(initialValues)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {}

  return (
    <Grommet theme={grommet}>
      <Grid
        rows={['xsmall', 'large']}
        columns={['small', 'large']}
        gap='small'
        areas={[
          { name: 'image', start: [0, 1], end: [0, 1] },
          { name: 'signUp', start: [1, 1], end: [1, 1] }
        ]}
      >
        <Card
          gridArea='image'
          margin='xxsmall'
          width='large'
          responsive='true'
          // align="center"
        >
          <Box height='large' width='medium' responsive='true'>
            <Image fit='cover' src={tempSigninImage} />
          </Box>
        </Card>
        <Card
          gridArea='signUp'
          pad='large'
          margin='large'
          responsive='true'
          align='center'
        >
          <Box>
            <Heading>Sign Up</Heading>

            <Form
              align='center'
              onSubmit={({ value }) => console.log('Submit', value)}
            >
              {/* If we want to have email above the field, place (label="Email") into FormField below */}
              <FormField
                required={true}
                onChange={handleChange}
                value={form.email}
                type='email'
                placeholder='Email'
                name='email'
                errors='Password is required'
              />
              <br />
              {/* If we want to have email above the field, place (label="Password") into FormField below */}
              <FormField
                required={true}
                onChange={handleChange}
                value={form.password}
                type='password'
                placeholder='Password'
                name='password'
              />
              <br />
              <FormField
                required={true}
                onChange={handleChange}
                value={form.passwordVerify}
                type='password'
                placeholder='Re-type Password'
                name='passwordVerify'
              />
              {/* {errors.password && <p>{errors.password.message}</p>} */}
              <br />
              <Button
                focusIndicator='false'
                type='submit'
                label='Submit'
                primary={true}
                onSubmit={onSubmit}
              />
              <br />
              {/* This needs to be Linked via Link once Sign up is added to the repo */}
              <br />
              <a href='#'>Don't have an account? Sign up</a>
            </Form>
          </Box>
        </Card>
      </Grid>
    </Grommet>
  )
}

export default SignUp
