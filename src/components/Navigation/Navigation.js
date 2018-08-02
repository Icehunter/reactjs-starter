// @flow

import * as React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { Collapse, Nav, NavbarBrand, NavbarToggler } from 'reactstrap';
import { compose } from 'redux';
import { StyledNavbar } from './styles';
import type { ApplicationState } from '../../store/types';
import type { Dispatch } from 'redux';

import type { ApplicationDispatchActions, ApplicationSettingsState } from '../../store/types';

const ThemeChooser = window.AsyncComponent(() => import('./ThemeChooser'));

type Props = {
  applicationSettings: ApplicationSettingsState,
  dispatch: Dispatch<ApplicationDispatchActions>,
  t: (key: string, options: any) => void
};

type State = {
  isOpen: boolean
};

class Navigation extends React.Component<Props, State> {
  state = { isOpen: false };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { applicationSettings, t } = this.props;
    const { value } = applicationSettings;
    const { theme } = value;
    return (
      <StyledNavbar expand="md" fixed="top" className={theme.navbarExtensions}>
        <NavbarBrand href="/">
          <strong>{t('components.navigation.title.start')}</strong>
          {t('components.navigation.title.end')}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <ThemeChooser />
          </Nav>
        </Collapse>
      </StyledNavbar>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  const { store } = state;
  const { applicationSettings } = store;
  return { applicationSettings };
};

export default compose(
  translate(),
  connect(mapStateToProps)
)(Navigation);
