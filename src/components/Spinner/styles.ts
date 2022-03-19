import styled from 'styled-components';

export interface ISpinnerProps {
  size?: string;
}

export const Container = styled.div<ISpinnerProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  border-radius: 50%;
  border: 2px solid var(--spinner);
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;

  animation: rotate 0.5s infinite linear;

  @keyframes rotate {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`;
