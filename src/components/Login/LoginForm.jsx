import React from "react";
import { Form, Field } from "react-final-form";
import { Input } from "../common/FormControls";
import {
  composeValidators,
  requieredField,
} from "../../utils/validators/validators";
import { FORM_ERROR } from "final-form";

export const LoginForm = ({ login }) => {
  const onSubmit = async ({ email, password, rememberMe }) => {
    try {
      await login(email, password, rememberMe);
    } catch (error) {
      return { [FORM_ERROR]: error };
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ submitError, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              component={Input}
              name="email"
              placeholder="Email"
              validate={composeValidators(requieredField)}
            />
          </div>
          <div>
            <Field
              component={Input}
              name="password"
              type="password"
              placeholder="Password"
              validate={composeValidators(requieredField)}
            />
          </div>
          {submitError && <div>{submitError}</div>}
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
