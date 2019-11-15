// @flow

import * as React from 'react';
import { Container } from './styles';

type Props = {
  children?: any
};

export default class PageContainer extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return <Container>{children}</Container>;
  }
}
