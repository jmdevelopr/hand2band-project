import React from 'react';
import { Text } from '../../components';
import ListStyled, { LinkItem, ListItem } from '../../components/content/List/ListStyled';
// import List from '../../components/content/List';
import { DATA } from '../../constants/data';
import { ITEM_VIEW } from '../../endpoints';
import MainViewStyled from './MainViewStyled';

export default function MainView(): JSX.Element {
  return (
    <MainViewStyled>
      <Text typography="textSmall" color="white">
        Main view
      </Text>
      <ListStyled>
        {DATA.map((data) => {
          const { id, is_unread: isUnread, from, snippet, sent_date: sentDate } = data;

          const params = new URLSearchParams();
          params.set('id', String(id));

          return (
            <ListItem>
              <input type="checkbox" checked={isUnread} />
              <LinkItem to={`${ITEM_VIEW}?${params.toString()}`} key={id}>
                <Text>{from}</Text>
                <Text>{snippet}</Text>
                <Text>{sentDate}</Text>
                <Text>{isUnread}</Text>
              </LinkItem>
            </ListItem>
          );
        })}
      </ListStyled>
    </MainViewStyled>
  );
}
