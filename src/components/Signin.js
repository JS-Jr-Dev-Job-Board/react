import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

//STYLE

const SignInH1 = styled.h1`
  color: ${(pr) => pr.theme.primaryColor};
`;

const Signup = () => {
  //STATE
  const { register, handleSubmit, errors } = useForm();

  //ONSUBMIT
  const onSubmit = (data) => {
    axios
      .post("#")
      .then((res) => {
        debugger;
      })
      .catch((res) => {
        debugger;
      });
    console.log(data);
  };

  //JSX- ref={register} handles and tracks changes and prevents the need to track value and onChanges manually

  return (
    <>
      <div>
        <div>Image</div>
        <SignInH1>Sign up</SignInH1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email
            <input
              ref={register({
                required: "Email is required",
                minLength: { value: 6, message: "Email is too Short" },
                shouldDirty: true,
              })}
              type="text"
              placeholder="Email"
              name="email"
            />
          </label>
          {errors.email && <p>{errors.email.message}</p>}
          <br />

          <label>
            Password
            <input
              ref={register({
                required: "Password is required",
                minLength: { value: 12, message: "Password is too Short" },
              })}
              type="password"
              placeholder="Password"
              name="password"
            />
          </label>
          {errors.password && <p>{errors.password.message}</p>}
          {/* Button Disabled is not needed as it doesn't allow anything to be sent without having the correct amount of info attached.  */}
          <button>Submit</button>
          <br />
          <a href="#">Don't have an account? Sign up</a>
        </form>
      </div>
    </>
  );
};
export default Signup;

//ReactHookButton form reinable.
//
