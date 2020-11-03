import React, { FC } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { AppStateType } from "../../redux/reduxStore";

type PropsType = MapStatePropsType & DispatchPropsType
type MapStatePropsType = {
  isAuth: boolean
  captchaUrl: string | null
}
type DispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

const Login: FC<PropsType> = (props) => {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect<MapStatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { login })(Login);
