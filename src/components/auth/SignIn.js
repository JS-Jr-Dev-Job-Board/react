import axios from 'axios'
import React, { useState } from 'react'
//import { useForm } from "react-hook-form"; //
//Style Imports

//Image Imports
import tempSigninImage from '../../assets/tempSigninImage.jpg'

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
          <img src={tempSigninImage} alt='placeholder text' />
        </div>
      </div>
      <div>
        <div>
          <h2>Sign In</h2>

          <form
            align='center'
            onSubmit={({ value }) => console.log('Submit', value)}
          >
            {/* If we want to have email above the field, place (label="Email") into FormField below */}

            <input
              onChange={change}
              value={form.email}
              type='email'
              placeholder='Email'
              name='email'
            />

            <br />
            <br />
            {/* If we want to have email above the field, place (label="Password") into FormField below */}

            <input
              onChange={change}
              value={form.password}
              type='password'
              placeholder='Password'
              name='password'
            />

            {/* {errors.password && <p>{errors.password.message}</p>} */}

            <br />
            <input type='submit' label='Submit' onSubmit={onSubmit} />
            <br />
            {/* This needs to be Linked via Link once Sign up is added to the repo */}
            <br />
            <a href='/'>Don't have an account? Sign up</a>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignIn

//The form validation no longer works. React-Hook-Form and Grommet currently don't work together.
//Example
// () => {
//   const [value, setValue] = React.useState({});
//   return (
//     <Form
//       value={value}
//       onChange={nextValue => setValue(nextValue)}
//       onReset={() => setValue({})}
//       onSubmit={({ value }) => {}}
//     >
//       <FormField name="name" htmlFor="text-input-id" label="Name">
//         <TextInput id="text-input-id" name="name" errors="Passord is required"/>
//       </FormField>
//       <Box direction="row" gap="medium">
//         <Button type="submit" primary label="Submit" />
//         <Button type="reset" label="Reset" />
//       </Box>
//     </Form>
//   );
// }
//Image next to it.

//Use Grommet form validation-- Figure it out

//Enable button
//Remove from front page
