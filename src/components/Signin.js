import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
//Style Imports
import {
  Box,
  Button,
  Card,
  Grommet,
  Form,
  Heading,
  Image,
  FormField,
  TextInput,
} from "grommet";
import { grommet } from "grommet/themes";

//Image Imports
import tempSigninImage from "../assets/tempSigninImage.jpg";

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
      <Grommet theme={grommet}>
        <Box height="medium" width="medium" responsive="true">
          <Image fit="cover" src={tempSigninImage} />
        </Box>
        <Card pad="large" margin="large" responsive="true" align="center">
          <Box>
            <Heading>Sign In</Heading>

            <Form align="center" onSubmit={handleSubmit(onSubmit)}>
              {/* If we want to have email above the field, place (label="Email") into FormField below */}
              <FormField name="email">
                <TextInput
                  ref={register({
                    required: "Email is required",
                    minLength: { value: 6, message: "Email is too Short" },
                  })}
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </FormField>
              {errors.email && <p>{errors.email.message}</p>}
              <br />
              <br />
              {/* If we want to have email above the field, place (label="Password") into FormField below */}
              <FormField name="password">
                <TextInput
                  ref={register({
                    required: "Password is required",
                    minLength: { value: 12, message: "Password is too Short" },
                  })}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </FormField>
              {errors.password && <p>{errors.password.message}</p>}
              {/* Button Disabled is not needed as react-form-hook doesn't allow anything to be sent without having the correct amount of info attached.  */}
              <br />
              <Button
                focusIndicator="false"
                type="reset"
                label="Submit"
                primary
              />
              <br />
              {/* This needs to be Linked via Link once Sign up exists */}
              <br />
              <a href="#">Don't have an account? Sign up</a>
            </Form>
          </Box>
        </Card>
      </Grommet>
    </>
  );
};
export default Signup;

//The form validation no longer works. React-Hook-Form.
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
