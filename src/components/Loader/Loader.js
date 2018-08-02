// @flow

import React from 'react';
import { Spinner, SpinnerFullScreen } from './styles';

type Props = {
  color?: string,
  size?: number,
  fullscreen?: boolean,
  position?: string
};

export default class Loader extends React.Component<Props> {
  static defaultProps = {
    fullscreen: false
  };
  render() {
    const { color, size, fullscreen, position } = this.props;
    if (fullscreen) {
      return (
        <SpinnerFullScreen>
          <Spinner color={color} size={size} />
        </SpinnerFullScreen>
      );
    }
    return <Spinner color={color} size={size} position={position} />;
  }
}
