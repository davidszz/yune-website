import type { ReactNode } from 'react';

import { ISubtitleProps, Container } from './styles';

interface IProps extends ISubtitleProps {
  children?: ReactNode;
}

export function Subtitle({ children, ...props }: IProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}