// @flow

import * as React from 'react';
import { translate } from 'react-i18next';

type Props = {
  t: (key: string, options: any) => void
};

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

export default translate()(Home);
