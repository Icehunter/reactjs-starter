// @flow

import * as React from 'react';
import { ComponentBuilder } from '../../extensions';
import { UserIdenity } from '../../store/selectors';
import { Branding } from './styles';

import type { CommonProps } from '../../extensions';

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
    const email = UserIdenity.getEmail(store);

    return (
      <div>
        <Branding>
          <strong>{t('components.navigation.title.start')}</strong>
          {t('components.navigation.title.end')}
        </Branding>
      </div>
    );
    // <StyledNavbar expand="md" fixed="top">
    //   <Link className="navbar-brand" to={'/'}>
    //     <span>
    //       <strong>{t('components.navigation.title.start')}</strong>
    //       {t('components.navigation.title.end')}
    //     </span>
    //   </Link>
    //   <NavbarToggler onClick={this.toggle} />
    //   <Collapse isOpen={this.state.isOpen} navbar>
    //     <Nav className="ml-auto" navbar>
    //       {email && (
    //         <NavItem>
    //           <a href={`mailto:${email}`} className="nav-link">
    //             {email}
    //           </a>
    //         </NavItem>
    //       )}
    //       <NavItem>
    //         <NavLink to="/SignOut" className="nav-link">
    //           <i className="fas fa-fw fa-sign-out-alt" />
    //         </NavLink>
    //       </NavItem>
    //     </Nav>
    //   </Collapse>
    // </StyledNavbar>
  }
}

export default ComponentBuilder(Navigation)
  .AddTranslation()
  .AddReducer('applicationSettings')
  .AddReducer('userIdentity')
  .Compile();
