import type { ReactNode } from "react";
import type { IconType } from "react-icons";

import { Container, ButtonProps, IconWrapper } from './styles';

interface Props extends ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  icon?: IconType;
}

export function Button(props: Props) {
  return (
    <Container {...props}>
      {props.icon && (
        <IconWrapper>
          <props.icon size="16px" />
        </IconWrapper>
      )}
      {props.children}
    </Container>
  )
}