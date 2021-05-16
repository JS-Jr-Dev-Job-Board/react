import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import { AuthHeader, AuthView } from './AuthFormsStyles'
import { Form, Input, Label, Button } from '../../global/styles/GlobalStyles'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  console.log(form)

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <AuthView>
      <AuthHeader>Log In</AuthHeader>

      <Form onSubmit={submitHandler}>
        <Label htmlFor='email'>
          <Input
            id='email'
            onChange={changeHandler}
            value={form.email}
            type='email'
            placeholder='Email'
            name='email'
          />
        </Label>
        <Label htmlFor='password'>
          <Input
            id='password'
            onChange={changeHandler}
            value={form.password}
            type='password'
            placeholder='Password'
            name='password'
          />
        </Label>
        <Button>Sign In</Button>
      </Form>

      <p>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </AuthView>
  )
}

export default Login
