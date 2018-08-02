// @flow

import * as React from 'react';

type Props = {};

export default class GenericNotFound extends React.Component<Props> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{'404'}</h1>
          </div>
        </div>
      </div>
    );
  }
}
