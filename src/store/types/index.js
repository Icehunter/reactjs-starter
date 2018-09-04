// @flow

import type { UserDispatchActions, UserIdentityState } from './UserIdentity';

export * from './UserIdentity';

export type ApplicationDispatchActions = UserDispatchActions;

export type ApplicationStoreModel = {
  userIdentity: UserIdentityState
};

export type ApplicationState = {
  store: ApplicationStoreModel
};
