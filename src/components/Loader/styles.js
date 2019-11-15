// @flow

import styled, { keyframes } from 'styled-components';

const transform = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div.attrs({
  color: (props) => props.color || 'FFF',
  size: (props) => props.size || 128,
  position: (props) => props.position || 'fixed'
})`
  display: inline-block;
  position: ${(props) => `${props.position}`};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  top: 50%;
  left: 50%;
  margin-top: ${(props) => `-${props.size}px`};
  margin-left: ${(props) => `-${props.size}px`};
  :after {
    content: ' ';
    display: block;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    margin: ${(props) => `${props.size / 2}px`};
    border-radius: 50%;
    border: ${(props) => `${props.size / 10}px`} solid ${(props) => `#${props.color}`};
    border-color: ${(props) => `#${props.color}`} transparent ${(props) => `#${props.color}`} transparent;
    animation: ${transform} 1.2s linear infinite;
  }
`;

export const SpinnerFullScreen = styled.div`
  opacity: 0.75;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: 10000;
`;
