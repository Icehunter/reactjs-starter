// @flow

import Promise from 'bluebird';

export type QueryAPIOptions = {
  url: string,
  configuration?: {
    [key: string]: string
  },
  authenticated?: boolean,
  timeout?: number
};

export const QueryAPI = (options: QueryAPIOptions) => {
  const { url, configuration = {}, timeout = 30000 } = options;
  const config = { method: 'GET', headers: {}, credentials: 'include', ...configuration };
  config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json; charset=utf-8';
  let timeException = false;
  return new Promise((resolve, reject) => {
    const TIMEOUT = setTimeout(function() {
      timeException = true;
      return reject(new Error('RequestTimedOut'));
    }, timeout);

    Promise.resolve(fetch(url, config))
      .then((response) => {
        clearTimeout(TIMEOUT);
        try {
          response
            .json()
            .then((data) => ({ data, response }))
            .then(({ data, response }) => {
              if (response.ok) {
                return resolve(data);
              }
              return reject(new Error('ResponseOK:False'));
            });
        } catch (err) {
          return reject(err);
        }
      })
      .catch((err) => {
        // rejection already happened with setTimeout
        if (timeException) {
          return;
        }
        // reject with error
        reject(err);
      });
  });
};
