import styled from "styled-components";

export interface ISubtitleProps {
  textAlign?: 'left' | 'center' | 'right';
}

export const Container = styled.h3<ISubtitleProps>`
  font-size: 3rem;
  font-weight: 700;

  color: var(--gray);

  text-align: ${(props) => props.textAlign ?? 'center'};
  line-height: 3.375rem;

  max-width: 680px;

  @media (max-width: 768px) {
    font-size: 1.9rem;
    line-height: 2.2rem;

    text-align: ${(props) => props.textAlign ?? 'left'};
  }
`;