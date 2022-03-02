import styled from "styled-components";

export interface IModalProps {
  width?: number;
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<IModalProps>`
  width: ${(props) => props.width !== null ? `${props.width}px` : 'auto'};

  border-radius: 4px;

  background: var(--modal-background);

  margin: 24px;
  padding: 16px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    min-width: 200px;

    margin: 0;

    border-radius: 0;
  }

  &.transition-enter {
    opacity: 0;
    transform: scale(.6);
  }

  &.transition-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  &.transition-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.transition-exit-active {
    opacity: 0;
    transform: scale(.6);
    transition: opacity 300ms, transform 300ms;
  }
`;

export const ModalHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ModalTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;

  padding: 6px;

  color: var(--base-text);
`;

export const CloseBtn = styled.div`
  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: color 300ms;

  margin-left: auto;

  &:hover {
    color: var(--red);
  }
`;

export const ModalBody = styled.div`
  max-height: 80vh;

  overflow-y: auto;
`;