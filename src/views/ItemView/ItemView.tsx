import React from 'react';
import { Text } from '../../components';
import { DATA } from '../../constants/data';
import { MAIN_VIEW } from '../../endpoints';
import useQueryParams from '../../hooks/useQueryParams';
import ItemViewStyled, { ItemHead, Title, Subject, Back } from './ItemViewStyled';

export default function ItemView(): JSX.Element {
  const params = useQueryParams();
  const id = params.get('id');
  const item = DATA.find((data) => String(data.id) === id);

  if (!item) {
    return <></>;
  }

  const { from, sent_date: sentDate, subject, snippet } = item;

  return (
    <ItemViewStyled>
      <ItemHead>
        <Text color="white" typography="textExtraSmall">
          Form: {from}
        </Text>
        <Text color="white" typography="textExtraSmall">
          {sentDate}
        </Text>
      </ItemHead>
      {snippet && (
        <Title color="white" typography="textMedium">
          {snippet}
        </Title>
      )}
      {subject && (
        <Subject color="white" typography="textSmall">
          {subject}
        </Subject>
      )}
      <Back to={MAIN_VIEW}>
        <Text bold>Go back</Text>
      </Back>
    </ItemViewStyled>
  );
}
