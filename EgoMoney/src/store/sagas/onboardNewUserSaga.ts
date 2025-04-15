/* Redux saga class

 */
//import { put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';

// Our worker Saga that onboards a user
export default function* onboardNewUserSaga() {
  //yield put(loginActions.enableLoader());

  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  //const response = { success: true, data: { id: 1 }, message: 'Success' };

  //if (response.success) {
   // yield put(loginActions.onLoginResponse(response.data));
   /// yield put(loginActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  //} else {
  //  yield put(loginActions.loginFailed());
  //  yield put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert('BoilerPlate', 'onboarded');
    }, 200);
  }
