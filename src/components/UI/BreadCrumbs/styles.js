// @flow

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItemLink = styled(Link)`
  color: #333;
`;

export const ListItem = styled.li`
  line-height: 32px !important;
`;

export const OrderedList = styled.ol`
  padding: 0 !important;
  margin: 0 !important;
  background: none !important;
  border: none !important;
`;
