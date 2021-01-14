import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
//Style Imports
// import styled from "styled-components";
import { Grommet } from "grommet";
//STYLE

const Signup = () => {
  //STATE
  const { register, handleSubmit, errors } = useForm();

  //ONSUBMIT-- Recoil, plus react-hook-form
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
        <Grommet plain>
          <section>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Email
                <input
                  ref={register({
                    required: "Email is required",
                    minLength: { value: 6, message: "Email is too Short" },
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
              {/* This needs to be Linked via Link once Sign up exists */}
              <a href="#">Don't have an account? Sign up</a>
            </form>
          </section>
        </Grommet>
      </div>
    </>
  );
};
export default Signup;

//How do you post the data to the backend in axios?
//How do you import fonts?
//I tried // import { injectGlobal } from "styled-components";

//Fonts
// injectGlobal`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&display=swap');
// `;
//Error "Attempted import error: 'injectGlobal' is not exported from 'styled-components'."
//"BigFont"      font-family: 'Bebas Neue', cursive;
//"smallerFont"  font-family: 'Rajdhani', sans-serif;

//Have you started cypress?
//How are you attaching the contribution form?
