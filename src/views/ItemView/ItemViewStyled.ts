import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '../../components';

export default styled.div(
  ({
    theme: {
      color: { primary },
      size: { ml: padding },
    },
  }) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  padding: ${padding}px ${padding}px 60px;
  background-color ${primary};
`,
);

export const ItemHead = styled.header(
  ({
    theme: {
      size: { l: marginBottom },
    },
  }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${marginBottom}px;
`,
);

export const Title = styled(Text)(
  ({
    theme: {
      size: { l: marginBottom },
    },
  }) => `
  margin-bottom: ${marginBottom}px;
`,
);

export const Subject = styled(Text)`
  max-height: 100%;
  overflow-y: overlay;
`;

export const Back = styled(Link)(
  ({
    theme: {
      color: { white },
      size: { m: bottom, l: right },
    },
  }) => `
  position: absolute;
  bottom: ${bottom}px;
  right: ${right}px;
  text-decoration: none;
  color: ${white};
`,
);
