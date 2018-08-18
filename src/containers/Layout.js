// @flow

import * as React from 'react';
import { BootSwatchThemes, BootSwatchVersion } from '../constants/theming';
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
  constructor(props) {
    super(props);

    let theme = LayoutStorage.getItemJSON('theme');
    if (!theme) {
      theme = { index: 0, name: 'Default', ...BootSwatchThemes[0] };
      LayoutStorage.setItemJSON('theme', theme);
    }

    this.state = {
      theme
    };

    this.props.dispatch(ApplicationSettingsThemeChanged(theme));
  }
  componentDidMount() {
    this.props.dispatch(UserIdentityRequested());
  }
  render() {
    const { store } = this.props;
    const theme = ApplicationSettings.getTheme(store);

    const themeLinks = [];
    if (theme && theme.shortName) {
      themeLinks.push(
        <link
          rel="stylesheet"
          href={`https://maxcdn.bootstrapcdn.com/bootswatch/${BootSwatchVersion}/${theme.shortName}/bootstrap.min.css`}
          media="screen"
          key={`theme-${theme.shortName}`}
        />
      );
    }

    return (
      <div>
        {themeLinks}
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

export default ComponentBuilder(Layout)
  .AddTranslation()
  .AddReducer('applicationSettings')
  .AddReducer('userIdentity')
  .Compile();
