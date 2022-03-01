import styled from "styled-components";

export interface ButtonProps {
  outlined?: boolean;
  uppercase?: boolean;
  transparent?: boolean;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  font-size: .75rem;
  font-weight: 600;
  
  padding: 12px 24px;

  border: ${(props) => props.outlined ? '1px solid var(--primary)' : 'none'};
  border-radius: 6px;

  background: ${(props) => props.outlined || props.transparent ? 'none' : 'var(--primary)'};

  cursor: pointer;
  white-space: nowrap;
  text-transform: ${(props) => props.uppercase ? 'uppercase' : ''};

  &:not(:disabled) {
    transition: background 300ms;

    &:hover {
      background: ${(props) => props.transparent ? 'none' : 'var(--primary)'};
    }
  }

  &:disabled {
    opacity: .6;

    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 6px;
`;