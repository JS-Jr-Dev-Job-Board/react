import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//Image Imports
// import tempSigninImage from '../../assets/tempSigninImage.jpg'

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
        <h2>Sign Up</h2>

        <form
          align='center'
          onSubmit={({ value }) => console.log('Submit', value)}
        >
          <input
            onChange={handleChange}
            value={form.email}
            type='email'
            placeholder='Email'
            name='email'
          />
          <input
            onChange={handleChange}
            value={form.password}
            type='password'
            placeholder='Password'
            name='password'
          />

          <input
            onChange={handleChange}
            value={form.passwordVerify}
            type='password'
            placeholder='Re-type Password'
            name='passwordVerify'
          />

          <button type='submit' label='Submit' onSubmit={onSubmit}>
            Register
          </button>

          <p>
            Already have an account? <Link to='/sign-in'>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
