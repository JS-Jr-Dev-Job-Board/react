import React, { useState } from "react";

const Signup = () => {
  const [signUp, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  return (
    <div>
      <div>Image</div>
      <h1>Sign up</h1>
      <form>
        <label>
          First Name
          <input type="text" placeholder="First Name" name="firstName" />
        </label>
        <br />
        <label>
          Last Name
          <input type="text" placeholder="Last Name" name="lastName" />
        </label>
        <br />
        <label>
          Email
          <input type="text" placeholder="Email" name="email" />
        </label>
        <br />
        <label>
          Username
          <input type="text" placeholder="Username" name="username" />
        </label>
        <br />
        <label>
          Password
          <input type="password" placeholder="Password" name="password" />
        </label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        />
        <br />
        <input type="checkbox" name="terms" />
        <button>Submit</button>
        <br />
        <a href="#">Have an account? Sign in</a>
      </form>
    </div>
  );
};
export default Signup;
