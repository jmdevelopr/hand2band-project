import React from 'react';
import { Text } from '../../components';
import { DATA } from '../../constants/data';
import useQueryParams from '../../hooks/useQueryParams';
import ItemViewStyled from './ItemViewStyled';

export default function ItemView(): JSX.Element {
  const params = useQueryParams();
  const id = params.get('id');
  const item = DATA.find((data) => String(data.id) === id);

  if (!item) {
    return <></>;
  }

  const { subject } = item;

  return (
    <ItemViewStyled>
      <Text>{subject}</Text>
    </ItemViewStyled>
  );
}
