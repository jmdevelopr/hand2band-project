import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled.ul`
  width: 100%;
  height: 100%;
  padding-left: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  list-style: none;
`;

export const LinkItem = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
