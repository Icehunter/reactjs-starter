// @flow

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BreadCrumbContainer = styled.div`
  grid-area: bread-crumbs;
`;

export const ListItemLink = styled(Link)`
  color: #333;
  &:hover {
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
  display: inline;
`;

export const BreadCrumbList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
