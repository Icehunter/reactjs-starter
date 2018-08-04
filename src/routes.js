// @flow

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { AsyncComponent } from './components/AsyncComponent';

const Layout = AsyncComponent(() => import('./containers/Layout'));
const Home = AsyncComponent(() => import('./routes/Home'));
const GenericNotFound = AsyncComponent(() => import('./routes/GenericNotFound'));

export const routes = (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={GenericNotFound} />
    </Switch>
  </Layout>
);
