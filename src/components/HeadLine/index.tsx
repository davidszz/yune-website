import type { ReactNode } from 'react';

import { IHeadLineProps, Wrapper } from './styles';

interface IProps extends IHeadLineProps {
  children?: ReactNode;
}

export function HeadLine({ children, ...props }: IProps) {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
}