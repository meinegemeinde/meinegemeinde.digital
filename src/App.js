import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Online from "./routes/online";
import OnlineAdmin from "./routes/online/admin";
import OnlineAdminMember from "./routes/online/adminMember";
import OnlineAdminCategory from "./routes/online/adminCategory";
import OnlineAdminContent from "./routes/online/adminContent";
import OnlineCategory from "./routes/online/category";
import SignIn from "./routes/offline/SignIn";
import Theme from "./theme";

class App extends Component {
  render() {
    return (
      <Theme>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />

            <Route exact path="/home" component={Online} />
            <Route
              exact
              path="/home/admin"
              render={() => <Redirect to="/admin" />}
            />
            <Route exact path="/home/:category" component={OnlineCategory} />

            <Route exact path="/admin" component={OnlineAdmin} />
            <Route exact path="/admin/member" component={OnlineAdminMember} />
            <Route
              exact
              path="/admin/category"
              component={OnlineAdminCategory}
            />
            <Route exact path="/admin/content" component={OnlineAdminContent} />

            <Route exact path="/signin" component={SignIn} />

            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </Theme>
    );
  }
}

export default App;
