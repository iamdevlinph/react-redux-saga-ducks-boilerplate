import { put, takeLatest } from 'redux-saga/effects';

import { types as counterTypes } from '../ducks/counter';

function* addRequest(action) {
  yield put({
    type: counterTypes.ADD_SUCCESS,
    payload: action.toAadd,
  });
}

function* minusRequest(action) {
  yield put({
    type: counterTypes.MINUS_SUCCESS,
    payload: action.toMinus,
  });
}

export default function* mySaga() {
  yield takeLatest(counterTypes.ADD_REQUEST, addRequest);
  yield takeLatest(counterTypes.MINUS_REQUEST, minusRequest);
}
