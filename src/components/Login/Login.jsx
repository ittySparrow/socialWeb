import React from "react";
import { Form, Field } from "react-final-form";
import { Input } from "../common/FormControls";
import {
  composeValidators,
  requieredField,
} from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const onSubmit = ({ email, password, rememberMe }) => {
    props.login(email, password, rememberMe);
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

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm {...props} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
