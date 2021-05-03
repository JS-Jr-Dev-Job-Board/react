import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Image Imports
// import tempSigninImage from '../../assets/tempSigninImage.jpg'

//STYLE
// const SImage = styled(Image)`
//   width: 100%;
// `;

const SignIn = () => {
  //STATE
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  //CHANGE
  const change = (e) => {
    const { value, name } = e.target
    const valueToUse = value
    setForm({ ...form, [name]: valueToUse })
  }

  //ONSUBMIT-- Recoil, plus react-hook-form
  const onSubmit = (data) => {
    axios
      .post('#')
      .then((res) => {
        debugger
      })
      .catch((res) => {
        debugger
      })
    console.log(data)
  }

  //JSX-
  return (
    <div>
      <div>
        <div>
          <h2>Sign In</h2>

          <form onSubmit={({ value }) => console.log('Submit', value)}>
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

            {/* {errors.password && <p>{errors.password.message}</p>} */}

            <button onSubmit={onSubmit}>Sign In</button>

            <p>
              Don't have an account? <Link to='/sign-up'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignIn
