import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import Cookies from "js-cookie";

import TheAdminLayout from "./containers/TheAdminLayout";
import TheLayout from "./containers/TheLayout";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 1000 * 150 * 1,
      showModal: false,
      userLoggedIn: false,
      isTimedOut: false,
    };

    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
  }

  _onAction(e) {
    console.log("user did something", e);
    this.setState({ isTimedOut: false });
  }

  _onActive(e) {
    console.log("user is active", e);
    this.setState({ isTimedOut: false });
  }

  _onIdle(e) {
    console.log("user is idle", e);
    this.state.isTimedOut = true;
    if (this.state.isTimedOut) {
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("loggedIn");
      Cookies.remove("token");
      window.location.reload();
    } else {
      this.idleTimer.reset();
      this.setState({ isTimedOut: false });
    }
  }
  render() {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    if (isLoggedIn === null) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.timeout}
        />
        <div>
          <Switch>
            <Route
              path="/dashboard/user"
              name="Dashboard"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              path="/dashboard/admin"
              name="Admin"
              render={(props) => <TheAdminLayout {...props} />}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default Layout;
