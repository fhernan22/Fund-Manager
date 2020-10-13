import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home.page";
import Admin from "./pages/Admin/Admin.page";

import { AuthProvider } from "./contexts/authContext";

import PrivateRoute from "./hooks/privateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
