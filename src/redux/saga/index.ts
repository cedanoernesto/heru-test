import { spawn } from 'redux-saga/effects';
import todoSaga from './user-saga';

export default function* rootSaga(): any {
  yield spawn(todoSaga);
}