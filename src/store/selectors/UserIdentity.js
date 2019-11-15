// @flow

import { get } from 'lodash';

import type { ApplicationStoreModel } from '../types';

export const UserIdenity = {
  getEmail: (state: ApplicationStoreModel): string => {
    return get(state, 'userIdentity.value.email');
  }
};
