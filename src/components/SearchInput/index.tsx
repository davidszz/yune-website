import { useEffect, useRef, MutableRefObject } from 'react';
import { BiSearch } from 'react-icons/bi';

import { Spinner } from '@components/Spinner';

import { ISearchInputProps, Container, IconWrapper, Input } from './styles';

interface IProps extends ISearchInputProps {
  value?: string;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;

  onChange?: (value: string) => void;
  onPressEnter?: () => void;
}

export function SearchInput({
  value = '',
  loading,
  disabled,
  placeholder = 'Pesquisar...',
  width = '400px',
  onChange,
  onPressEnter,
}: IProps) {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.target !== inputRef.current) {
        return;
      }

      if (disabled) {
        return;
      }

      if (onPressEnter && event.key === 'Enter') {
        onPressEnter();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [disabled, onPressEnter]);

  function handleInputChange(value: string) {
    if (disabled) {
      return;
    }

    if (onChange) {
      onChange(value);
    }
  }

  return (
    <Container disabled={disabled} width={width}>
      <IconWrapper>
        <BiSearch size="24px" />
      </IconWrapper>
      <Input
        ref={inputRef}
        disabled={disabled}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleInputChange(event.target.value)}
      />
      <IconWrapper>{loading && <Spinner size="16px" />}</IconWrapper>
    </Container>
  );
}
