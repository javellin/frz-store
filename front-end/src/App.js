import React from "react";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "components/Header";
import { shopSagaActions } from "core/redux/features/shop/shopSagaActions";

import { Home } from "pages/Home";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: shopSagaActions.FETCH_SHOP_ITEMS });
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="root">
        <Router basename={process.env.REACT_APP_BASENAME}>
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
