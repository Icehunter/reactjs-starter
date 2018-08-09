// @flow

import * as React from 'react';
import { BootSwatchThemes } from '../constants/theming';
import { ComponentBuilder, ReactJSStorage } from '../extensions';
import { ApplicationSettingsThemeChanged, UserIdentityRequested } from '../store/actions';
import { ApplicationSettings } from '../store/selectors';

import type { ApplicationTheme } from '../store/types';
import type { CommonProps } from '../extensions';

const LayoutStorage = new ReactJSStorage('layout');

const Colorizer = window.AsyncComponent(() => import('../components/Colorizer'));
const Navigation = window.AsyncComponent(() => import('../components/Navigation'));

const PageContainer = window.AsyncComponent(() => import('../components/UI/PageContainer'));
const PageContent = window.AsyncComponent(() => import('../components/UI/PageContent'));
const PageFooter = window.AsyncComponent(() => import('../components/UI/PageFooter'));
const PageSideBar = window.AsyncComponent(() => import('../components/UI/PageSideBar'));

type Props = {} & CommonProps;

type State = {
  theme: ApplicationTheme
};

class Layout extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch(UserIdentityRequested());
  }
  componentWillMount() {
    let theme = LayoutStorage.getItemJSON('theme');
    if (!theme) {
      theme = { name: 'Default', ...BootSwatchThemes.Default };
      LayoutStorage.setItemJSON('theme', theme);
    }
    this.setState({ theme });

    this.props.dispatch(ApplicationSettingsThemeChanged(theme));
  }
  render() {
    const { store } = this.props;
    const theme = ApplicationSettings.getTheme(store);

    let themeLink = <div />;
    if (theme) {
      themeLink = <link rel="stylesheet" href={theme.cssURL} media="screen" />;
    }

    return (
      <div>
        {themeLink}
        <Colorizer />
        <Navigation />
        <PageContainer>
          <PageSideBar />
          <PageContent>{this.props.children}</PageContent>
          <PageFooter>{'© 2018 Ryan Wilson All Rights Reserved'}</PageFooter>
        </PageContainer>
      </div>
    );
  }
}

export default new ComponentBuilder(Layout)
  .AddTranslation()
  .AddReducer('applicationSettings')
  .AddReducer('userIdentity')
  .Compile();
