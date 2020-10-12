import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/HomeComponent/Home.component";
import Dashboard from "./components/Dashboard/Dashboard.component";

import { AuthProvider } from "./contexts/authContext";

import PrivateRoute from "./hooks/privateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
