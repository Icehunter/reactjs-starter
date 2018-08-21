// @flow

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { APPLICATION_SETTINGS_THEME_CHANGED } from '../constants';

const error = handleActions({}, null);

const requested = handleActions({}, false);

const value = handleActions(
  {
    [APPLICATION_SETTINGS_THEME_CHANGED]: {
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
