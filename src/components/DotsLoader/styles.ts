import styled from "styled-components";

export interface IDotsLoaderProps {
  scale?: number;
}

export const Container = styled.div<IDotsLoaderProps>`
  width: ${(props) => `calc(32px * ${(props.scale ?? 1)} * 3 + 8px * ${(props.scale ?? 1)}) * 2`};
  height: ${(props) => 32 * (props.scale ?? 1)}px;

  display: flex;
  gap: ${(props) => 8 * (props.scale ?? 1)}px;

  & > div {
    background-color: var(--white);

    width: ${(props) => 32 * (props.scale ?? 1)}px;
    height: ${(props) => 32 * (props.scale ?? 1)}px;

    border-radius: 50%;

    animation: scale-animation infinite 1000ms ease-in-out;
  }

  & > div:nth-child(2) {
    animation-delay: 250ms;
  }

  & > div:nth-child(3) {
    animation-delay: 500ms;
  }

  @keyframes scale-animation {
    0%, 100% {
      transform: scale(1);
    }

    50%, 75% {
      transform: scale(.2);
    }
  }
`;