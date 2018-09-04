// @flow

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: grid;
  grid-area: sidebar;
  background: #2d353c;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const ListItemLink = styled(Link).attrs({
  className: (props) => {
    const active = props.active === 'true' ? 'active' : '';
    return `${active}`;
  }
})`
  display: inline;
  color: #ccc;
  font-size: 0.8em;
  text-transform: uppercase;
  padding: 0 10px;
  &:hover,
  &.active {
    background-color: #222;
    color: #ccc;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ListItemNoLink = styled.div`
  display: inline;
  color: #ccc;
  font-size: 0.8em;
  text-transform: uppercase;
  padding: 0 10px;
  &:hover,
  &.active {
    background-color: #222;
    color: #ccc;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  display: grid;
  margin: 5px 0;
`;

export const SideBarListContainer = styled.div`
  display: grid;
  position: fixed;
  width: 200px;
  top: 75px;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  background: #2d353c;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const SideBarList = styled.ul`
  display: table;
  padding: 0;
  list-style: none;
`;
