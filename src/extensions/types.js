// @flow

import type { Dispatch } from 'redux';

import type { ApplicationDispatchActions, ApplicationStoreModel } from '../store/types';

export type CommonProps = {
  children?: any,
  dispatch: Dispatch<ApplicationDispatchActions>,
  store: ApplicationStoreModel,
  t: (key: string, options: ?{}) => void
};
