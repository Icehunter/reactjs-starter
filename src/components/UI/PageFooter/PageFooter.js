// @flow

import * as React from 'react';
import { Footer } from './styles';

type Props = {
  children?: any
};

export default class PageFooter extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return <Footer>{children}</Footer>;
  }
}
