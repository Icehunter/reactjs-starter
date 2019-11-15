// @flow

import { USER_IDENTITY_REQUESTED, USER_IDENTITY_RESPONSE } from '../constants';

// ACTIONS
export type UserDispatchActions = { type: typeof USER_IDENTITY_REQUESTED } | { type: typeof USER_IDENTITY_RESPONSE };

// STATE TREE
export type UserIdentityModel = {
  email: string
};

export type UserIdentityState = { error: string, requested: boolean, value: UserIdentityModel };
