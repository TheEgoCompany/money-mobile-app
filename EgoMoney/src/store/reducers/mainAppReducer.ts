/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../createReducer';
import * as types from '../actions/types';

import { IMainAppState } from '../models/reducers/mainAppState.ts';
import { ISetUserOnboarded } from '../actions/mainAppActions.ts';

const initialState: IMainAppState = {
  isOnboarded: false,
};

export const mainAppStateReducer = createReducer(initialState, {
  [types.SET_ONBOARDED_STATE](state: IMainAppState, action: ISetUserOnboarded) {
    return {
      ...state,
      isOnboarded: action.userOnboarded,
    };
  },
});
