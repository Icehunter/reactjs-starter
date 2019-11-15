// @flow

import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px auto;
  grid-template-areas: 'content-header' 'content-main';
  background-color: #fafafa;
  grid-area: content;
`;

export const ContentHeader = styled.div`
  display: grid;
  border-bottom: 1px solid #ddd;
  background: #eee;
  padding: 0 10px;
  line-height: 36px;
  font-size: 0.8em;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'bread-crumbs notice';
  grid-area: content-header;
  text-transform: uppercase;
`;

export const Content = styled.div`
  border: 1px solid #eee;
  border-bottom: none;
  margin: 10px 10px 0 10px;
  padding: 10px 10px 0 10px;
  background: #fff;
  grid-area: content-main;
`;

export const Notice = styled.div`
  text-align: right;
`;
