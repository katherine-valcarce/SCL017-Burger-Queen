import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Identify from "./components/Identify.jsx";
import User from "./components/user";
import Menu from "./components/menu";
import React, { useState } from "react";

const App = () => {
  let [waiter, setWaiter] = useState("");
  let [table, setTable] = useState("");

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Identify />
        </Route>
        <Route path="/user">
          <User setWaiter={setWaiter}/>
        </Route>
        <Route path="/menu">
          <Menu waiter={waiter} setTable={setTable} table={table}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
