// @flow

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { USER_IDENTITY_REQUESTED, USER_IDENTITY_RESPONSE } from '../constants';

const error = handleActions(
  {
    [USER_IDENTITY_RESPONSE]: {
      next() {
        return null;
      },
      throw(state, action) {
        const { payload } = action;
        const { message } = payload;
        return message;
      }
    }
  },
  null
);

const requested = handleActions(
  {
    [USER_IDENTITY_REQUESTED]() {
      return true;
    },
    [USER_IDENTITY_RESPONSE]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [USER_IDENTITY_RESPONSE]: {
      next(state, action) {
        const { payload } = action;
        return payload;
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
