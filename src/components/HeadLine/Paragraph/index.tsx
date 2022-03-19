import type { ReactNode } from 'react';

import { IParagraphProps, Container } from './styles';

interface IProps extends IParagraphProps {
  children?: ReactNode;
}

export function Paragraph({ children, ...props }: IProps) {
  return <Container {...props}>{children}</Container>;
}
