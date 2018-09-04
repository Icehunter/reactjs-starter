// @flow

import * as React from 'react';
import { ComponentBuilder } from '../../../extensions';
import { Content, ContentContainer, ContentHeader, Notice } from './styles';

import type { CommonProps } from '../../../extensions';

const BreadCrumbs = window.AsyncComponent(() => import('../BreadCrumbs'));

type Props = {
  children?: any
} & CommonProps;

class PageContent extends React.Component<Props> {
  render() {
    const crumbs = [{ text: 'Home', link: '/' }];
    const { location } = this.props;
    const { pathname } = location;
    if (pathname !== '/') {
      let link = '';
      const paths = pathname.split('/');
      paths.filter((path) => path).forEach((path, index) => {
        link += `/${path}`;
        if (index < paths.length) {
          crumbs.push({ text: path, link });
        } else {
          crumbs.push({ text: path });
        }
      });
    }
    return (
      <ContentContainer>
        <ContentHeader>
          <BreadCrumbs crumbs={crumbs} />
          <Notice>syndicated.life@gmail.com</Notice>
        </ContentHeader>
        <Content>{this.props.children}</Content>
      </ContentContainer>
    );
  }
}

export default ComponentBuilder(PageContent).Compile();
