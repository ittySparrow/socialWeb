import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type DispatchPropsType = {
  logout: () => void
}

type PropsType = MapStatePropsType & DispatchPropsType

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = ({ auth }: AppStateType): MapStatePropsType => {
  return {
    isAuth: auth.isAuth,
    login: auth.login,
  };
};

export default connect<MapStatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { logout })(HeaderContainer);
