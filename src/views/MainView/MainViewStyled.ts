import styled from 'styled-components';
import { Text } from '../../components';

export default styled.div(
  ({
    theme: {
      mainView: { backgroundColor },
    },
  }) => `
    width: 100%;
    background-color: ${backgroundColor};
  `,
);

export const Title = styled(Text)`
  text-align: center;
`;
