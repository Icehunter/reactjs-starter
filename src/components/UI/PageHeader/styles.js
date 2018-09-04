// @flow

import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  grid-template-columns: 200px 1fr;
  grid-template-areas: 'branding' 'menu';
  display: grid;
  grid-column: 1 / span 2;
  grid-row: 2;
  z-index: 10;
`;

export const Menu = styled.div`
  display: grid;
  grid-area: menu;
`;

export const Branding = styled.div`
  display: grid;
  color: #000;
  grid-area: branding;
  padding: 0 15px;
  line-height: 70px;
  font-size: 1.5em;
`;
