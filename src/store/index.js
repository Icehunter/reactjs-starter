// @flow

import { combineReducers } from 'redux';
import * as UserIdentity from './reducers/UserIdentity';

export const reducers = combineReducers({
  userIdentity: UserIdentity.reducer
});
