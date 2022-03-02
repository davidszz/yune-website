import type { ReactNode } from "react";

import { Wrapper } from './styles';

interface IProps {
  children?: ReactNode;
}

export function OverlayWrapper({ children }: IProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}