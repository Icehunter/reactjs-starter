// @flow

import * as React from 'react';
import { ComponentBuilder } from '../../../extensions';
import { Branding, HeaderContainer, Menu } from './styles';

import type { CommonProps } from '../../../extensions';

type Props = {} & CommonProps;

class PageHeader extends React.Component<Props> {
  render() {
    const { t } = this.props;

    return (
      <HeaderContainer>
        <Branding>
          <div>
            <strong>{t('components.navigation.title.start')}</strong>
            {t('components.navigation.title.end')}
          </div>
        </Branding>
        <Menu />
      </HeaderContainer>
    );
  }
}

export default ComponentBuilder(PageHeader)
  .AddTranslation()
  .Compile();
