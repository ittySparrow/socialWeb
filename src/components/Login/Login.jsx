import React from "react";
import { Form, Field } from "react-final-form";
import { Input } from "../common/FormControls";
import {
  composeValidators,
  requieredField,
} from "../../utils/validators/validators";

const LoginForm = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              component={Input}
              name="login"
              placeholder="Login"
              validate={composeValidators(requieredField)}
            />
          </div>
          <div>
            <Field
              component={Input}
              name="password"
              placeholder="Password"
              validate={composeValidators(requieredField)}
            />
          </div>
          <div>
            <Field component={Input} name="rememberMe" type="checkbox" />
            remember me
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      )}
    />
  );
};

export default () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};
