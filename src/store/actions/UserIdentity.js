// @flow

import { createAction } from 'redux-actions';

import { USER_IDENTITY_REQUESTED, USER_IDENTITY_RESPONSE } from '../constants';

export const UserIdentityRequested = createAction(USER_IDENTITY_REQUESTED);
export const UserIdentityResponse = createAction(USER_IDENTITY_RESPONSE);
