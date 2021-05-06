// import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
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
    <div>
      <h2>Sign In</h2>
      {/* {errors.password && <p>{errors.password.message}</p>} */}

      <form onSubmit={submitHandler}>
        <label htmlFor='email'>
          <input
            id='email'
            onChange={changeHandler}
            value={form.email}
            type='email'
            placeholder='Email'
            name='email'
          />
        </label>
        <label htmlFor='password'>
          <input
            id='password'
            onChange={changeHandler}
            value={form.password}
            type='password'
            placeholder='Password'
            name='password'
          />
        </label>
        <button>Sign In</button>
      </form>

      <p>
        Don't have an account? <Link to='/sign-up'>Sign up</Link>
      </p>
    </div>
  )
}
export default SignIn
