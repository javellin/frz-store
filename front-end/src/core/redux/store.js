import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import shopReducer from "core/redux/features/shop/shopSlice";

import rootSaga from "core/redux/features/shop/shopSaga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export { store };
