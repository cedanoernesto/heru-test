import {
    put,
    call,
    takeEvery
  } from 'redux-saga/effects';
  import { userActions } from '../actions';
  const {
    SET_LOADING,
    GET_USERS,
    GET_USERS_REQUESTED,
    SET_USER_TITLE,
   } = userActions;
  import {
    getAllUsers,
  } from '../api/user-api';
  function* getUsers() {
    yield put({ type: SET_LOADING })
    const users = yield call(getAllUsers)
    yield put({ type: GET_USERS, payload: users })
  }

  // Export the saga (user-saga)
  export default function* userSaga() {
    yield takeEvery(GET_USERS_REQUESTED, getUsers)
  }