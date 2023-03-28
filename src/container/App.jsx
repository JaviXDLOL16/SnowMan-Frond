import React from "react";
import "../styles/App.css";
import Frezeer from "../pages/Freezers";
import Login from "../pages/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/control-panel" component={Frezeer} />
      </div>
    </Router>
  );
}

export default App;
