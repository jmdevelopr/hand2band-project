import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Text } from '../../components';
import ListStyled, { ListItem } from '../../components/content/List/ListStyled';
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
            <Link to={`${ITEM_VIEW}?${params.toString()}`} key={id}>
              <Button>
                <ListItem>
                  <input type="checkbox" checked={isUnread} />
                  <Text>{from}</Text>
                  <Text>{snippet}</Text>
                  <Text>{sentDate}</Text>
                  <Text>{isUnread}</Text>
                </ListItem>
              </Button>
            </Link>
          );
        })}
      </ListStyled>
    </MainViewStyled>
  );
}
