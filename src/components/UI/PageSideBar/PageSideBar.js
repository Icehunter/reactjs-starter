// @flow

import * as React from 'react';
import { SideBar } from './styles';

type Props = {
  children?: any
};

export default class PageSideBar extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return <SideBar>{children}</SideBar>;
  }
}
