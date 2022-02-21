import React from 'react';
import { IListItem } from '../../../types/list';
import { Text } from '../../ui';
import ListStyled, { ListItem } from './ListStyled';

export interface IList {
  items: IListItem[];
}
// todo later
export default function List({ items }: IList): JSX.Element {
  if (!items) {
    return <></>;
  }

  return (
    <ListStyled>
      {Array.isArray(items) &&
        items.map((item) => (
          <ListItem key={item.key}>
            <Text>{item.label}</Text>
          </ListItem>
        ))}
      {!Array.isArray(items) &&
        Object.entries(items).map(([, item]) => {
          const typedItem = item;
          return (
            <ListItem key={typedItem.key}>
              <Text>{typedItem.label}</Text>
            </ListItem>
          );
        })}
    </ListStyled>
  );
}
