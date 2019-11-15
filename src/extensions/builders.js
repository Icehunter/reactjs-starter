// @flow

import hoistStatics from 'hoist-non-react-statics';
import * as React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import config from '../config';

import type { ApplicationState } from '../store/types';

type EnvironmentProps = {};

const WithEnvironment = () => {
  return (WrappedComponent: any) => {
    class Environment extends React.Component<EnvironmentProps> {
      render() {
        return <WrappedComponent environment={config} {...this.props} />;
      }
    }
    return hoistStatics(Environment, WrappedComponent);
  };
};

export const ComponentBuilder = (component: any) => {
  class Builder {
    constructor(component: any) {
      this.component = component;
    }
    component: any;
    environmentSupport: boolean;
    translationSupport: boolean;
    reducers = [];
    dispatchers = null;
    AddenvironmentSupport = () => {
      this.environmentSupport = true;
      return this;
    };
    AddTranslation = () => {
      this.translationSupport = true;
      return this;
    };
    AddReducer = (reducer: string) => {
      if (!this.reducers.includes(reducer)) {
        this.reducers.push(reducer);
      }
      return this;
    };
    AddDispatchers = (dispatchers: {} = {}) => {
      this.dispatchers = dispatchers;
      return this;
    };
    Compile = () => {
      const args = [];

      if (this.environmentSupport) {
        args.push(WithEnvironment());
      }

      if (this.translationSupport) {
        args.push(translate());
      }

      const mapStateToProps = (state: ApplicationState) => {
        const { store } = state;
        const reduced = {};
        this.reducers.forEach((storeName) => {
          reduced[storeName] = store[storeName];
        });
        return { store: reduced };
      };

      if (this.dispatchers) {
        args.push(
          connect(
            mapStateToProps,
            this.dispatchers
          )
        );
      } else {
        args.push(connect(mapStateToProps));
      }

      args.push(withRouter);

      return compose.apply(null, args)(component);
    };
  }
  return new Builder(component);
};
