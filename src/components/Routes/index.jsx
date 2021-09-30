import { Switch, Route } from "react-router";
import Cart from "../Cart";
import Products from "../Products";

const Routes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default Routes;
