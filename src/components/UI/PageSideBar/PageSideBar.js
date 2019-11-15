// @flow

import * as React from 'react';
import { ComponentBuilder } from '../../../extensions';
import { FAIcon } from '../Styled';
import { ListItem, ListItemLink, ListItemNoLink, SideBarContainer, SideBarList, SideBarListContainer } from './styles';

import type { CommonProps } from '../../../extensions';

const menuItems = [
  {
    to: '/',
    icon: {
      icon: 'home',
      size: 2,
      m: 1
    },
    text: 'Home'
  },
  {
    to: '/dashboard',
    icon: {
      icon: 'th-large',
      size: 2,
      m: 1
    },
    text: 'Dashboard'
  },
  {
    to: '/email',
    icon: {
      icon: 'hdd',
      size: 2,
      m: 1
    },
    text: 'E-mail'
  },
  {
    to: '/widgets',
    icon: {
      icon: 'simplybuilt',
      size: 2,
      m: 1,
      brand: true
    },
    text: 'Widgets'
  },
  {
    icon: {
      icon: 'gem',
      size: 2,
      m: 1
    },
    sub: [
      {
        to: '/buttons',
        text: 'Button'
      }
    ],
    text: 'UI Elements'
  },
  {
    to: '/forms',
    icon: {
      icon: 'list-ol',
      size: 2,
      m: 1
    },
    text: 'Forms'
  },
  {
    to: '/tables',
    icon: {
      icon: 'table',
      size: 2,
      m: 1
    },
    text: 'Tables'
  }
];

type Props = {} & CommonProps;

class PageSideBar extends React.Component<Props> {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    return (
      <SideBarContainer>
        <SideBarListContainer>
          <SideBarList>
            {menuItems.map((item, index) => {
              const { to, icon, text, sub } = item;
              let content = <div />;
              if (to) {
                const active = to.split('?')[0] === pathname;
                content = (
                  <ListItemLink to={to} active={active.toString()}>
                    <FAIcon {...icon} />
                    {text}
                  </ListItemLink>
                );
              } else {
                if (sub) {
                  content = (
                    <ListItemNoLink>
                      <FAIcon {...icon} />
                      {text}
                    </ListItemNoLink>
                  );
                }
              }
              return <ListItem key={index}>{content}</ListItem>;
            })}
          </SideBarList>
        </SideBarListContainer>
      </SideBarContainer>
    );
  }
}

export default ComponentBuilder(PageSideBar).Compile();
