// @flow

import * as React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import type { ApplicationState } from '../store/types';
import type { Dispatch } from 'redux';

import type { ApplicationDispatchActions, ApplicationStoreModel } from '../store/types';

type OwnProps = {
  reducers: []
};

type Props = {
  children?: Function,
  dispatch: Dispatch<ApplicationDispatchActions>,
  store: ApplicationStoreModel,
  t: (key: string, options: {}) => void
} & OwnProps;

class SuperComponent extends React.Component<Props, $NonMaybeType<Props>> {
  translate = (key: string, options: {} = {}) => {
    return this.props.t(key, options);
  };
  render() {
    const { children, dispatch, store, t } = this.props;
    let content = <div />;
    if (typeof children === 'function') {
      const rendered = children({ dispatch, store, t });
      if (React.isValidElement(rendered)) {
        content = rendered;
      }
    }
    return content;
  }
}

const mapStateToProps = (
  state: ApplicationState,
  ownProps: OwnProps = {
    reducers: []
  }
) => {
  const { store } = state;
  const reduced = {};
  ownProps.reducers.forEach((storeName) => {
    reduced[storeName] = store[storeName];
  });
  return { store: reduced };
};

export default compose(
  translate(),
  connect(mapStateToProps)
)(SuperComponent);
