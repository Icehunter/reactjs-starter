// @flow

import * as React from 'react';
import { Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { ComponentBuilder } from '../../extensions';
import { ApplicationSettings, UserIdenity } from '../../store/selectors';
import { StyledNavbar } from './styles';
import type { CommonProps } from '../../extensions';

const ThemeChooser = window.AsyncComponent(() => import('./ThemeChooser'));

type Props = {} & CommonProps;

type State = {
  isOpen: boolean
};

class Navigation extends React.Component<Props, State> {
  state = { isOpen: false };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { store, t } = this.props;
    const theme = ApplicationSettings.getTheme(store);
    const email = UserIdenity.getEmail(store);

    return (
      <StyledNavbar expand="md" fixed="top" className={theme.navbarExtensions}>
        <NavbarBrand href="/">
          <strong>{t('components.navigation.title.start')}</strong>
          {t('components.navigation.title.end')}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {email && (
              <NavItem>
                <NavLink>{email}</NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink href="/SignOut">
                <i className="fas fa-fw fa-sign-out-alt" />
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <ThemeChooser />
          </Nav>
        </Collapse>
      </StyledNavbar>
    );
  }
}

export default new ComponentBuilder(Navigation)
  .AddTranslation()
  .AddReducer('applicationSettings')
  .AddReducer('userIdentity')
  .Compile();
