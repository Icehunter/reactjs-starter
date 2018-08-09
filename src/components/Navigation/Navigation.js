// @flow

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Collapse, Nav, NavbarToggler, NavItem } from 'reactstrap';
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
        <Link className="navbar-brand" to={'/'}>
          <span>
            <strong>{t('components.navigation.title.start')}</strong>
            {t('components.navigation.title.end')}
          </span>
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {email && (
              <NavItem>
                <a href={`mailto:${email}`} className="nav-link">
                  {email}
                </a>
              </NavItem>
            )}
            <NavItem>
              <NavLink to="/SignOut" className="nav-link">
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
