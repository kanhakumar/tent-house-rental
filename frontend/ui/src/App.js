import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Customer from "./components/Customer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Product from "./components/Product";
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path='/customers' component={Customer}></Route>
      <Route path='/products' component={Product}></Route> 
      <Route path='/transactions' component={Transaction}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
};

export default App;
