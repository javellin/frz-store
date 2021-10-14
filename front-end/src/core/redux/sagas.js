import { all } from "@redux-saga/core/effects";
import shopSaga from "core/redux/features/shop/shopSaga";

export const sagas = [shopSaga];

export default function* rootSaga() {
  yield all([shopSaga]);
}
