import { call, takeEvery, put } from "redux-saga/effects";

import { fetchShopItems } from "core/services/shopService";
import { updateShopItems } from "core/redux/features/shop/shopSlice";

import { shopSagaActions } from "./shopSagaActions";

export function* fetchShopItemsSaga() {
  try {
    let result = yield call(() => fetchShopItems());
    yield put(updateShopItems(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(shopSagaActions.FETCH_SHOP_ITEMS, fetchShopItemsSaga);
}
