import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled.ul`
  width: 100%;
  height: 100%;
  padding-left: 0;
`;

export const ListItem = styled.li(
  ({
    theme: {
      color: { primary, primaryDark },
    },
  }) => `
  width: 100%;
  height: 100%;
  list-style: none;
  background-color: ${primaryDark};
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${primary};
  }
`,
);

export const LinkItem = styled(Link)(
  ({
    theme: {
      color: { white },
    },
  }) => `
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${white};
  padding: 10px;
`,
);
