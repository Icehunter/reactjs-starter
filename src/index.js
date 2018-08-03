// @flow

import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import storage from 'redux-persist/lib/storage/index';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import './application.css';
import { AsyncComponent } from './components/AsyncComponent';
import i18next from './i18next';
import registerServiceWorker from './registerServiceWorker';
// import Loader from './components/Loader';
import { reducers } from './store';
import Sagas from './store/sagas';

// setup window helpers
window.AsyncComponent = window.AsyncComponent || AsyncComponent;

const Layout = window.AsyncComponent(() => import('./containers/Layout'));
const Home = window.AsyncComponent(() => import('./routes/Home'));
const GenericNotFound = window.AsyncComponent(() => import('./routes/GenericNotFound'));

const routes = (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={GenericNotFound} />
    </Switch>
  </Layout>
);

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

// setup middleware
const history = createBrowserHistory({ basename: baseUrl });
const routedMiddleware = routerMiddleware(history);

// root reducers
const rootReducers = combineReducers({
  ...{
    store: reducers
  },
  ...{
    routing: routerReducer
  }
});

// persisted reducers
// const persistedReducers = persistReducer(
//   {
//     key: 'root',
//     storage: storage
//   },
//   rootReducers
// );

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// store with middleware
const store = compose(
  applyMiddleware(routedMiddleware, sagaMiddleware, logger),
  window.devToolsExtension ? window.devToolsExtension() : (async) => async
)(createStore)(rootReducers);

// run sagas
Sagas.map((saga) => sagaMiddleware.run(saga));

// setup persisted store
// const persistedStore = persistStore(store);

const root: ?Element = document.getElementById('root');
if (root != null) {
  ReactDOM.render(
    <I18nextProvider i18n={i18next} defaultNS="translations">
      <Provider store={store}>
        <ConnectedRouter history={history} children={routes} />
      </Provider>
    </I18nextProvider>,
    root
  );
  registerServiceWorker();
}
