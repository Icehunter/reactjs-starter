// @flow

import * as React from 'react';
import { FAIcon } from '../Styled';
import { BreadCrumbContainer, BreadCrumbList, ListItem, ListItemLink } from './styles';

export type BreadCrumb = {
  text: string,
  link: string
};

type Props = {
  crumbs: BreadCrumb[]
};

export default class BreadCrumbs extends React.Component<Props> {
  render() {
    const { crumbs } = this.props;

    const items = crumbs
      .reverse()
      .map((crumb, index) => {
        const { text, link } = crumb;

        const key = `${text}-${index}`;
        const active = index === 0;
        const item = active ? text : <ListItemLink to={`${link}`}>{text}</ListItemLink>;

        let icon = <div />;
        if (index > 0) {
          icon = <FAIcon icon="chevron-right" p={1} />;
        }
        return (
          <ListItem active key={key}>
            {item}
            {icon}
          </ListItem>
        );
      })
      .reverse();

    return (
      <BreadCrumbContainer>
        <BreadCrumbList>{items}</BreadCrumbList>
      </BreadCrumbContainer>
    );
  }
}
