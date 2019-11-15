// @flow

import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const ShiftingGradient = styled.div`
  display: grid;
  grid-area: colorizer;
  background: linear-gradient(270deg, #2196f3, #f44336, #ff9800, #cddc39, #00bcd4);
  background-size: 1000%;
  animation: ${gradient} 10s ease infinite;
`;
