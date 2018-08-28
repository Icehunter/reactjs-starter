// @flow

import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import type { ApplicationState } from '../store/types';

export const ComponentBuilder = (component: any) => {
  class Builder {
    constructor(component: any) {
      this.component = component;
    }
    component: any;
    translationSupport: boolean;
    reducers = [];
    dispatchers: {
      [key: string]: Function
    } = {};
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
    AddDispatchers = (dispatchers: {}) => {
      this.dispatchers = dispatchers;
      return this;
    };
    Compile = () => {
      const args = [];

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

      args.push(
        connect(
          mapStateToProps,
          this.dispatchers
        )
      );

      args.push(withRouter);

      return compose.apply(null, args)(component);
    };
  }
  return new Builder(component);
};
