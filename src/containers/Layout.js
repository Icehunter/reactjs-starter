// @flow

import * as React from 'react';
import { ComponentBuilder } from '../extensions';
import { UserIdentityRequested } from '../store/actions';

import type { CommonProps } from '../extensions';

const Colorizer = window.AsyncComponent(() => import('../components/Colorizer'));

const PageContainer = window.AsyncComponent(() => import('../components/UI/PageContainer'));
const PageHeader = window.AsyncComponent(() => import('../components/UI/PageHeader'));
const PageContent = window.AsyncComponent(() => import('../components/UI/PageContent'));
const PageFooter = window.AsyncComponent(() => import('../components/UI/PageFooter'));
const PageSideBar = window.AsyncComponent(() => import('../components/UI/PageSideBar'));

type Props = {} & CommonProps;

class Layout extends React.Component<Props> {
  componentDidMount() {
    this.props.dispatch(UserIdentityRequested());
  }
  render() {
    return (
      <PageContainer>
        <Colorizer />
        <PageHeader />
        <PageSideBar />
        <PageContent children={this.props.children} />
        <PageFooter />
      </PageContainer>
    );
  }
}

export default ComponentBuilder(Layout)
  .AddTranslation()
  .AddReducer('userIdentity')
  .Compile();
