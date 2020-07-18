import React from "react";
import { Form, Field } from "react-final-form";

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
            <Field component="input" name="login" placeholder="Login" />
          </div>
          <div>
            <Field component="input" name="password" placeholder="Password" />
          </div>
          <div>
            <Field component="input" name="rememberMe" type="checkbox" />
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
