import { put, call, takeEvery } from 'redux-saga/effects';
import { userActions } from '../actions';
import { getUsers } from '../api/user-api';

const { SET_LOADING, GET_USERS, GET_USERS_REQUESTED } = userActions;

function* getAllUsers(): any {
  yield put({ type: SET_LOADING })
  const users = yield call(getUsers)
  yield put({ type: GET_USERS, payload: users })
}

export default function* userSaga(): any {
  yield takeEvery(GET_USERS_REQUESTED, getAllUsers)
}