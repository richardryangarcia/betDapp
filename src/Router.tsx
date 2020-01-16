import React from "react";
import { App } from "./components/SetupApplication/App";
import { Basic } from "./components/Basic";
import { HeaderMenu } from "./components/Header";
import { EditProfile } from "./components/EditProfile";
import { AwaitTxAlert } from "./components/AwaitTxAlert";
import { Artists } from "./components/Artists";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <App>
        <AwaitTxAlert />
        <HeaderMenu />
        <div style={{ marginTop: "65px" }}>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route path='/bets' component={Basic} key='bets' exact />
            <Route path='/edit-profile' render={() => <EditProfile />} exact />
            <Route
              path='/artists'
              render={() => <Artists />}
              key='artists'
              exact
            />
          </Switch>
        </div>
      </App>
    </Router>
  );
};
