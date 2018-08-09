// @flow

import * as React from 'react';
import { Content } from './styles';

type Props = {
  children?: any
};

export default class PageContent extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return <Content>{children}</Content>;
  }
}
