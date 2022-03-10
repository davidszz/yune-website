import styled from "styled-components";

export interface IParagraphProps {
  textAlign?: 'left' | 'center' | 'right';
}

export const Container = styled.p`
  font-size: 1rem;
  font-weight: 400;

  color: var(--gray);

  max-width: 680px;

  line-height: 1.625rem;

  margin: 0 auto;
  margin-top: 24px;

  text-align: center;
`;