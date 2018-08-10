// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import { UserIdentityResponse } from '../actions';
import { USER_IDENTITY_REQUESTED } from '../constants';

import type { Saga } from 'redux-saga';
import type { UserIdentityModel } from '../types';

const fetchUserIdentityAPI = () => {
  const user: UserIdentityModel = {
    email: 'syndicated.life@gmail.com'
  };
  return Promise.resolve(user)
    .then((user) => user)
    .catch((err) => err);
};

const fetchUserIdentity: * = function*(): Saga<void> {
  const response = yield call(fetchUserIdentityAPI);
  yield put(UserIdentityResponse(response));
};

const userIdentitySaga: * = function*(): Saga<void> {
  yield takeLatest(USER_IDENTITY_REQUESTED, fetchUserIdentity);
};

export default [userIdentitySaga];
