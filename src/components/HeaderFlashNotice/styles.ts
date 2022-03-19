import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;

  background-color: ${(props) => props.color ?? 'var(--primary)'};

  padding: 6px 12px;

  display: flex;
  align-items: center;
`;

export const Notice = styled.div`
  flex-grow: 1;

  font-size: 0.84rem;
  font-weight: 400;
  font-family: 'Roboto', 'Open Sans', sans-serif;

  color: var(--black);

  & > a {
    color: var(--green);
  }

  text-align: center;
`;

export const CloseBtn = styled.div`
  position: relative;

  width: 12px;
  height: 12px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';

    position: absolute;

    height: 100%;
    width: 1px;

    background-color: var(--black);
  }

  &::before {
    transform: rotateZ(45deg);
  }

  &::after {
    transform: rotateZ(-45deg);
  }
`;
