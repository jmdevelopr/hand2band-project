import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled.table`
  width: 100%;
  height: 100%;
`;

export const ListItem = styled.tr`
  width: 100%;
  height: 100%;
`;

export const LinkItem = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
