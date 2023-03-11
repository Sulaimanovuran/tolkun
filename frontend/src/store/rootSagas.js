import {all} from 'redux-saga/effects';
import history from '../history';
import historySagas from "./sagas/historySagas";
import notifierSagas from "./sagas/notifierSagas";
import userSagas from "./sagas/usersSagas";

export default function* rootSagas() {
  yield all([
    ...userSagas,
    ...historySagas(history),
    ...notifierSagas,
  ])
}