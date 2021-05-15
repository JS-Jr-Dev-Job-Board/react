// import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import { AuthHeader, AuthView } from './AuthStyles'
import { Form, Input, Label, Button } from '../../global/styles/GlobalStyles'

const SignIn = () => {
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

  //ONSUBMIT-- Recoil, plus react-hook-form
  // const onSubmit = (data) => {
  //   axios
  //     .post('#')
  //     .then((res) => {
  //       debugger
  //     })
  //     .catch((res) => {
  //       debugger
  //     })
  //   console.log(data)
  // }

  return (
    <AuthView>
      <AuthHeader>Sign In</AuthHeader>
      {/* {errors.password && <p>{errors.password.message}</p>} */}

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
        Don't have an account? <Link to='/sign-up'>Sign up</Link>
      </p>
    </AuthView>
  )
}
export default SignIn
