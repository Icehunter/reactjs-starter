// @flow

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 5px 70px auto 50px;
  grid-template-areas: 'sidebar colorizer' 'sidebar header' 'sidebar content' 'sidebar footer';
`;
