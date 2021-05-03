import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const initialValue = {
  email: '',
  password: '',
  passwordVerify: ''
}

const SignUp = () => {
  const [form, setForm] = useState(initialValue)
  const { push } = useHistory()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (form.password !== form.passwordVerify) {
      alert('passwords must match')
    } else {
      setForm(initialValue)
      push('/sign-in')
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>

      <form onSubmit={submitHandler}>
        <label htmlFor='email'>
          <input
            id='email'
            onChange={handleChange}
            value={form.email}
            type='email'
            placeholder='Email'
            name='email'
          />
        </label>
        <label htmlFor='password'>
          <input
            id='password'
            onChange={handleChange}
            value={form.password}
            type='password'
            placeholder='Password'
            name='password'
          />
        </label>
        <label htmlFor='passwordVerify'>
          <input
            id='passwordVerify'
            onChange={handleChange}
            value={form.passwordVerify}
            type='password'
            placeholder='Re-type Password'
            name='passwordVerify'
          />
        </label>
        <button>Register</button>
      </form>

      <p>
        Already have an account? <Link to='/sign-in'>Sign in</Link>
      </p>
    </div>
  )
}

export default SignUp
