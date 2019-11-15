// @flow

import styled from 'styled-components';
import { space } from 'styled-system';

export const FAIcon = styled.i.attrs({
  className: (props) => {
    const type = props.brand ? 'fab' : 'fas';
    return `${type} fa-${props.size || 1}x fa-fw fa-${props.icon}`;
  }
})`
  vertical-align: middle;
  ${space};
`;
