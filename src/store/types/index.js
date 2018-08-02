// @flow

import type { ApplicationSettingsDispatchActions, ApplicationSettingsState } from './ApplicationSettings';
import type { UserDispatchActions, UserIdentityState } from './UserIdentity';

export * from './ApplicationSettings';
export * from './UserIdentity';

export type ApplicationDispatchActions = ApplicationSettingsDispatchActions | UserDispatchActions;

export type ApplicationStoreModel = {
  applicationSettings: ApplicationSettingsState,
  userIdentity: UserIdentityState
};

export type ApplicationState = {
  store: ApplicationStoreModel
};
