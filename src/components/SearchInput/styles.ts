import styled from 'styled-components';

export interface ISearchInputProps {
  width?: string;
  disabled?: boolean;
}

export const Container = styled.div<ISearchInputProps>`
  width: 100%;
  max-width: ${(props) => props.width ?? '400px'};
  height: 48px;

  background-color: var(--input-background);

  border: 1px solid var(--borders);
  border-radius: 24px;

  display: flex;
  flex-flow: row nowrap;

  ${(props) => {
    if (props.disabled) {
      return `
        opacity: .6;
        cursor: not-allowed;
      `;
    }
  }}
`;

export const IconWrapper = styled.div`
  min-width: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.color ?? 'var(--text)'};
`;

export const Input = styled.input`
  font-size: 1rem;

  flex-grow: 1;
  width: 100%;

  padding: 0 12px;

  &:disabled {
    cursor: not-allowed;
    user-select: none;
  }
`;
