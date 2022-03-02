import styled from "styled-components";

export interface IButtonProps {
  outlined?: boolean;
  uppercase?: boolean;
  transparent?: boolean;
  size?: number;
  hoverDelay?: number;
}

const resize = (size = 1, val: number) => String(size * val);

export const Container = styled.button<IButtonProps>`
  display: flex;
  align-items: center;

  font-size: ${(props) => resize(props.size, .75)}rem;
  font-weight: 600;
  
  padding: ${(props) => `${resize(props.size, 12)}px ${resize(props.size, 24)}px`};

  border: ${(props) => props.outlined ? '1px solid var(--primary)' : 'none'};
  border-radius: 4px;

  background: ${(props) => props.outlined || props.transparent ? 'none' : 'var(--primary)'};

  cursor: pointer;
  white-space: nowrap;
  text-transform: ${(props) => props.uppercase ? 'uppercase' : ''};

  &:not(:disabled) {
    transition: background ${(props) => props.hoverDelay ?? 300}ms;

    &:hover {
      background: ${(props) => {
        if (props.transparent) return 'none';
        if (props.outlined) return 'var(--primary)';
        return 'var(--primary-hover)';
      }};
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