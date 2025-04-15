/**
 *  Redux saga class init
 */
import { takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/types';
import onboardNewUserSaga
 from './onboardNewUserSaga';

export default function* watch() {
  yield all([takeEvery(types.ONBOARD_NEW_USER, onboardNewUserSaga)]);
}

