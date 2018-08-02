// @flow

import { combineReducers } from 'redux';
import * as ApplicationSettings from './reducers/ApplicationSettings';
import * as UserIdentity from './reducers/UserIdentity';

export const reducers = combineReducers({
  applicationSettings: ApplicationSettings.reducer,
  userIdentity: UserIdentity.reducer
});
