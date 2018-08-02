// @flow

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { UserIdentityRequested, UserIdentityResponse } from '../actions';

const error = handleActions(
  {
    [UserIdentityResponse.toString()]: {
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
    [UserIdentityRequested.toString()]() {
      return true;
    },
    [UserIdentityResponse.toString()]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [UserIdentityResponse.toString()]: {
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
