import { put, takeLatest } from 'redux-saga/effects';

import { types as counterTypes } from '../ducks/counter';

function* willIncrease() {
  yield put({
    type: counterTypes.INCREASE_SUCCESS,
  });
}

function* willDecrease() {
  yield put({
    type: counterTypes.DECREASE_SUCCESS,
  });
}

export default function* mySaga() {
  yield takeLatest(counterTypes.INCREASE_REQUEST, willIncrease);
  yield takeLatest(counterTypes.DECREASE_REQUEST, willDecrease);
}
