import { spawn } from 'redux-saga/effects';
import todoSaga from './user-saga';

export default function* rootSaga() {
  yield spawn(todoSaga);
}