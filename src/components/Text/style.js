import styled from 'styled-components';

const TextStyled = styled.p(
  ({ color, fontSize, fontWeight }) => `
  margin: 0;
  color: ${color};
  font-size: ${fontSize || '1rem'};
  font-weight: ${fontWeight || 500};
`,
);

export default TextStyled;
