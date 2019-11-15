// @flow

import type { Location, Match, RouterHistory } from 'react-router';
import type { Dispatch } from 'redux';
import type { ApplicationDispatchActions, ApplicationStoreModel } from '../store/types';

export type CommonProps = {
  children?: any,
  dispatch: Dispatch<ApplicationDispatchActions>,
  history: RouterHistory,
  location: Location,
  match: Match,
  store: ApplicationStoreModel,
  t: (key: string, options: ?{}) => void
};
