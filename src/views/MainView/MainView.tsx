import React, { useState } from 'react';
import { Text } from '../../components';
import ListStyled, { LinkItem, ListItem } from '../../components/content/List/ListStyled';
import countPropertiesFromObjectArray from '../../compositions/countPropertiesFromObject';
// import List from '../../components/content/List';
import { DATA } from '../../constants/data';
import { ITEM_VIEW } from '../../endpoints';
import { IDataItem } from '../../types/data';
import MainViewStyled, { Title } from './MainViewStyled';

interface IHandleRead {
  id: number;
  readValue?: boolean;
}

export default function MainView(): JSX.Element {
  const [data, setData] = useState<IDataItem[]>(DATA);

  const handleRead = ({ id, readValue }: IHandleRead) => {
    const currentDataItem = data.find((dataItem) => dataItem.id === id);

    if (!currentDataItem) {
      return;
    }

    const index = data.indexOf(currentDataItem);
    currentDataItem.is_unread = readValue ?? !currentDataItem.is_unread;

    const newData = [...data];
    newData.splice(index, 1, currentDataItem);
    setData(newData);
  };

  return (
    <MainViewStyled>
      <Title as="h5" typography="textSmall" color="black">
        You have {countPropertiesFromObjectArray<IDataItem>({ obj: data, property: 'is_unread', value: true })} unread
        items.
      </Title>
      <ListStyled>
        {data.map((dataItem) => {
          const { id, is_unread: isUnread, from, snippet, sent_date: sentDate } = dataItem;

          const params = new URLSearchParams();
          params.set('id', String(id));

          return (
            <ListItem key={id}>
              <input type="checkbox" onChange={() => handleRead({ id })} checked={!isUnread} />
              <LinkItem to={`${ITEM_VIEW}?${params.toString()}`} onClick={() => handleRead({ id, readValue: false })}>
                {from && <Text>From: {from}</Text>}
                {snippet && <Text> | {snippet} </Text>}
                {sentDate && <Text> | sent at: {sentDate}</Text>}
              </LinkItem>
            </ListItem>
          );
        })}
      </ListStyled>
    </MainViewStyled>
  );
}
