// @flow

import type { ApplicationStoreModel, ApplicationTheme } from '../types';
import { get } from 'lodash';

export const ApplicationSettings = {
  getTheme: (state: ApplicationStoreModel): ApplicationTheme => {
    return get(state, 'applicationSettings.value.theme');
  }
};
