import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  //STATE
  const { register, handleSubmit, errors } = useForm();

  //ONSUBMIT
  const onSubmit = (data) => {
    console.log(data);
  };

  //JSX- ref={register} handles and tracks changes and prevents the need to track value and onChanges manually
  return (
    <>
      <div>
        <div>Image</div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email
            <input
              ref={register({
                required: "Email is required",
                minLength: { value: 3, message: "Email is too Short" },
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
                minLength: { value: 8, message: "Password is too Short" },
              })}
              type="password"
              placeholder="Password"
              name="password"
            />
          </label>
          {errors.password && <p>{errors.password.message}</p>}

          <button>Submit</button>
          <br />
          <a href="#">Have an account? Sign in</a>
        </form>
      </div>
    </>
  );
};
export default Signup;
