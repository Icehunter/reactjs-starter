// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { BootSwatchThemes } from '../constants/theming';
import { ApplicationSettingsThemeChanged, UserIdentityRequested } from '../store/actions';
import { ReactJSStorage } from '../utilities';
import type { ApplicationState } from '../store/types';
import type { Dispatch } from 'redux';

import type {
  ApplicationDispatchActions,
  ApplicationSettingsState,
  ApplicationTheme,
  UserIdentityState
} from '../store/types';

const LayoutStorage = new ReactJSStorage('layout');

const Colorizer = window.AsyncComponent(() => import('../components/Colorizer'));
const Navigation = window.AsyncComponent(() => import('../components/Navigation'));

type Props = {
  children?: any,
  applicationSettings: ApplicationSettingsState,
  userIdentity: UserIdentityState,
  dispatch: Dispatch<ApplicationDispatchActions>
};

type State = {
  theme: ApplicationTheme
};

class Layout extends React.Component<Props, State> {
  componentWillMount() {
    let theme = LayoutStorage.getItemJSON('theme');
    if (!theme) {
      theme = { name: 'Default', ...BootSwatchThemes.Default };
      LayoutStorage.setItemJSON('theme', theme);
    }
    this.setState({ theme });

    this.props.dispatch(ApplicationSettingsThemeChanged(theme));
  }
  componentDidMount() {
    this.props.dispatch(UserIdentityRequested());
  }
  render() {
    const { applicationSettings } = this.props;
    const { value } = applicationSettings;

    let themeLink = <div />;
    if (value) {
      const { theme } = value;
      themeLink = <link rel="stylesheet" href={theme.cssURL} media="screen" />;
    }

    return (
      <div>
        {themeLink}
        <Colorizer />
        <Navigation />
        <section id="main-application">
          <section id="main">{this.props.children}</section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  const { store } = state;
  const { applicationSettings, userIdentity } = store;
  return { applicationSettings, userIdentity };
};

export default connect(mapStateToProps)(Layout);
