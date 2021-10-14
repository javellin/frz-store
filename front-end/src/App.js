import { Home } from "pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "components/Header";
import { shopSagaActions } from "core/redux/features/shop/shopSagaActions";

import "./index.css";
import React from "react";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: shopSagaActions.FETCH_SHOP_ITEMS });
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="root">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
