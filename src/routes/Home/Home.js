// @flow

import * as React from 'react';
import { ComponentBuilder } from '../../extensions';
import type { CommonProps } from '../../extensions';

type Props = {} & CommonProps;

class Home extends React.Component<Props> {
  render() {
    const { t } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{t('routes.home.message')}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default new ComponentBuilder(Home).AddTranslation().Compile();
