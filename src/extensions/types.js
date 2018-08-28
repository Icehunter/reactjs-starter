// @flow

import type { Location, Match, RouterHistory } from 'react-router';
import type { ApplicationStoreModel } from '../store/types';

export type CommonProps = {
  children?: any,
  history: RouterHistory,
  location: Location,
  match: Match,
  store: ApplicationStoreModel,
  t: (key: string, options: ?{}) => void
};
