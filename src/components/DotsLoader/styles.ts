import styled from 'styled-components';

export interface IDotsLoaderProps {
  scale?: number;
}

export const Container = styled.div<IDotsLoaderProps>`
  width: ${(props) => `calc(32px * ${props.scale ?? 1} * 3 + 8px * ${props.scale ?? 1}) * 2`};
  height: ${(props) => 32 * (props.scale ?? 1)}px;

  display: flex;
  gap: ${(props) => 8 * (props.scale ?? 1)}px;

  & > div {
    background-color: var(--white);

    width: ${(props) => 32 * (props.scale ?? 1)}px;
    height: ${(props) => 32 * (props.scale ?? 1)}px;

    border-radius: 50%;
    transform: scale(0.2);

    animation: scale-animation infinite 1s cubic-bezier(0.13, 0.92, 0.45, 0.99);
  }

  & > div:nth-child(2) {
    animation-delay: 0.15s;
  }

  & > div:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes scale-animation {
    0%,
    50%,
    100% {
      transform: scale(1);
    }

    25%,
    40% {
      transform: scale(0.2);
    }
  }
`;
