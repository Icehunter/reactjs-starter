// @flow

import { APPLICATION_SETTINGS_THEME_CHANGED } from '../constants';

// ACTIONS
export type ApplicationSettingsDispatchActions = { type: typeof APPLICATION_SETTINGS_THEME_CHANGED };

// STATE TREE
export type ApplicationTheme = {
  name: string,
  cssURL: string,
  navbarExtensions: string
};

export type ApplicationSettingsModel = { theme: ApplicationTheme };

export type ApplicationSettingsState = { error: string, requested: boolean, value: ApplicationSettingsModel };
