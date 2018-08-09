// @flow

import * as React from 'react';
import { ComponentBuilder } from '../../extensions';

import type { CommonProps } from '../../extensions';

const PageHeader = window.AsyncComponent(() => import('../../components/UI/PageHeader'));

type Props = {} & CommonProps;

class Home extends React.Component<Props> {
  render() {
    const { t } = this.props;
    return (
      <div>
        <PageHeader title={t('routes.home.header.title')} message={t('routes.home.header.message')} />
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
