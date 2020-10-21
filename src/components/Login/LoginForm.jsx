import React from "react";
import { Form, Field } from "react-final-form";
import { Input } from "../common/FormControls";
import {
  composeValidators,
  requieredField,
} from "../../utils/validators/validators.ts";
import { FORM_ERROR } from "final-form";

export const LoginForm = ({ login, captchaUrl }) => {
  const onSubmit = async ({ email, password, rememberMe, captcha = null }) => {
    try {
      await login(email, password, rememberMe, captcha);
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
          {captchaUrl && <img src={captchaUrl} alt={"captcha"}></img>}
          {captchaUrl && (
            <div>
              <Field
                component={Input}
                name="captcha"
                placeholder="Type symbols from the picture above"
                validate={composeValidators(requieredField)}
              />
            </div>
          )}
          <div>
            <button>Login</button>
          </div>
        </form>
      )}
    />
  );
};
