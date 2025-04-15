/*
 * combines all th existing reducers
 */
import * as mainAppStateReducer from './mainAppReducer';

export default Object.assign(
    mainAppStateReducer,
);
