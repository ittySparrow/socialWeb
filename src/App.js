import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import { initializeApp } from "./redux/appReducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader";
import { Suspense } from "react";

const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route
            path="/users"
            component={() => (
              <Suspense fallback={<Preloader />}>
                <UsersContainer />
              </Suspense>
            )}
          />
          <Route path="/login" component={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default connect(mapStateToProps, { initializeApp })(App);
