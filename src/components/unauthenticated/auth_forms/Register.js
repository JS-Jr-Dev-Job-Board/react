import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// styles
import { AuthHeader, AuthView } from './AuthFormsStyles'
import { Form, Input, Label, Button } from '../../global/styles/GlobalStyles'

const initialValue = {
  email: '',
  password: '',
  passwordVerify: '',
}

const Register = () => {
  const [form, setForm] = useState(initialValue)
  const { push } = useHistory()

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
    <AuthView>
      <AuthHeader>Register for a new account</AuthHeader>

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
        <Label htmlFor='passwordVerify'>
          <Input
            id='passwordVerify'
            onChange={changeHandler}
            value={form.passwordVerify}
            type='password'
            placeholder='Verfiy Password'
            name='passwordVerify'
          />
        </Label>
        <Button>Register</Button>
      </Form>

      <p>
        Already have an account? <Link to='/login'>login</Link>
      </p>
    </AuthView>
  )
}

export default Register
