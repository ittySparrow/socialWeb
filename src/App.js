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
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";

const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends React.Component {
  handleAllUncaughtErrors = (reason, promise) => {
    alert(reason);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.handleAllUncaughtErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.handleAllUncaughtErrors
    );
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
          <Switch>
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
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
            <Route
              path="/music"
              component={() => <div>UNDER CONSTRUCTION</div>}
            />
            <Route
              path="/settings"
              component={() => <div>UNDER CONSTRUCTION</div>}
            />
            <Redirect exact from="/" to="/profile" />
            <Route path="*" component={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default connect(mapStateToProps, { initializeApp })(App);
