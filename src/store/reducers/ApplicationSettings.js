// @flow

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { ApplicationSettingsThemeChanged } from '../actions';

const error = handleActions({}, null);

const requested = handleActions({}, false);

const value = handleActions(
  {
    [ApplicationSettingsThemeChanged.toString()]: {
      next(state, action) {
        const { payload: theme } = action;
        return {
          theme
        };
      }
    }
  },
  null
);

export const reducer = combineReducers({
  error,
  requested,
  value
});
