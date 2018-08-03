// @flow

import type { ApplicationStoreModel, UserIdentityModel } from '../types';
import { get } from 'lodash';

export const UserIdenity = {
  getEmail: (state: ApplicationStoreModel): UserIdentityModel => {
    return get(state, 'userIdentity.value.email');
  }
};
