// @flow

import * as React from 'react';
import { ComponentBuilder } from '../../extensions';

import type { CommonProps } from '../../extensions';

type Props = {} & CommonProps;

class Home extends React.Component<Props> {
  render() {
    const { t } = this.props;
    return (
      <div>
        <h1>{t('routes.home.message')}</h1>
      </div>
    );
  }
}

export default ComponentBuilder(Home)
  .AddTranslation()
  .Compile();
