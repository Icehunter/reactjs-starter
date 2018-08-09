// @flow

import type { ApplicationStoreModel } from '../types';
import { get } from 'lodash';

export const UserIdenity = {
  getEmail: (state: ApplicationStoreModel): string => {
    return get(state, 'userIdentity.value.email');
  }
};
