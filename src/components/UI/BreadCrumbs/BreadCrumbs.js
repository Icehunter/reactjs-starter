// @flow

import * as React from 'react';
import { ListItem, ListItemLink, OrderedList } from './styles';

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
        const isActive = index === 0;
        const active = isActive ? 'active' : '';
        const item = isActive ? text : <ListItemLink to={`${link}`}>{text}</ListItemLink>;

        return (
          <ListItem className={`breadcrumb-item ${active}`} key={key}>
            {item}
          </ListItem>
        );
      })
      .reverse();

    return <OrderedList className="breadcrumb pull-right">{items}</OrderedList>;
  }
}
