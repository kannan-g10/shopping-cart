import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
