// @flow

import * as React from 'react';
import { Header } from './styles';

type Props = {
  title: string,
  message?: string
};

export default class PageHeader extends React.Component<Props> {
  render() {
    const { title, message } = this.props;

    return (
      <Header>
        {title} <small>{message}</small>
      </Header>
    );
  }
}
