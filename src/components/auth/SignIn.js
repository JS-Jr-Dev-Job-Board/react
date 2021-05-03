// import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const change = (e) => {
    const { value, name } = e.target
    const valueToUse = value
    setForm({ ...form, [name]: valueToUse })
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

      <form>
        <input
          onChange={change}
          value={form.email}
          type='email'
          placeholder='Email'
          name='email'
        />
        <input
          onChange={change}
          value={form.password}
          type='password'
          placeholder='Password'
          name='password'
        />
        <button>Sign In</button>
      </form>

      <p>
        Don't have an account? <Link to='/sign-up'>Sign up</Link>
      </p>
    </div>
  )
}
export default SignIn
