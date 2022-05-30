import styled from 'styled-components';

const TextStyled = styled.p(
  ({ color, fontSize = '1rem', fontWeight = 500, cursor }) => `
  margin: 0;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  color: ${color};
  cursor: ${cursor};
`,
);

export default TextStyled;
