import React, { useState } from 'react'

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
    <div>
      <div>
        <img src={tempSigninImage} alt='placeholder alt text' />
      </div>

      <div>
        <h2>Sign Up</h2>

        <form
          align='center'
          onSubmit={({ value }) => console.log('Submit', value)}
        >
          {/* If we want to have email above the field, place (label="Email") into input below */}
          <input
            onChange={handleChange}
            value={form.email}
            type='email'
            placeholder='Email'
            name='email'
          />
          <br />
          {/* If we want to have email above the field, place (label="Password") into input below */}
          <input
            onChange={handleChange}
            value={form.password}
            type='password'
            placeholder='Password'
            name='password'
          />
          <br />
          <input
            onChange={handleChange}
            value={form.passwordVerify}
            type='password'
            placeholder='Re-type Password'
            name='passwordVerify'
          />
          {/* {errors.password && <p>{errors.password.message}</p>} */}
          <br />
          <button type='submit' label='Submit' onSubmit={onSubmit}>
            button text
          </button>
          <br />
          {/* This needs to be Linked via Link once Sign up is added to the repo */}
          <br />
          <a href='#'>Don't have an account? Sign up</a>
        </form>
      </div>
    </div>
  )
}

export default SignUp
