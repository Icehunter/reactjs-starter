// @flow

import { get } from 'lodash';

import type { ApplicationStoreModel, ApplicationTheme } from '../types';

export const ApplicationSettings = {
  getTheme: (state: ApplicationStoreModel): ApplicationTheme => {
    return get(state, 'applicationSettings.value.theme');
  }
};
