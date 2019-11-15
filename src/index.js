// @flow

import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import './application.css';
import { AsyncComponent } from './components/AsyncComponent';
import i18next from './i18next';
import registerServiceWorker from './registerServiceWorker';
import { routes } from './routes';
import { reducers } from './store';
import Sagas from './store/sagas';

// setup window helpers
window.AsyncComponent = window.AsyncComponent || AsyncComponent;

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

// setup middleware
const history = createBrowserHistory({ basename: baseUrl });

// root reducers
const rootReducers = combineReducers({
  ...{
    store: reducers
  }
});

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store with middleware
const store = createStore(
  connectRouter(history)(rootReducers),
  {},
  composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware, logger))
);

// run sagas
Sagas.map((saga) => sagaMiddleware.run(saga));

const root: ?Element = document.getElementById('root');
if (root != null) {
  ReactDOM.render(
    <I18nextProvider i18n={i18next} defaultNS="translations">
      <Provider store={store}>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </Provider>
    </I18nextProvider>,
    root
  );
  registerServiceWorker();
}
