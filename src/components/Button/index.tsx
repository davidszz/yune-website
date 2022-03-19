import type { MouseEvent, ReactNode } from 'react';
import type { IconType } from 'react-icons';

import { Container, IButtonProps, IconWrapper } from './styles';

interface IProps extends IButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  icon?: IconType;
  iconColor?: string;
  onClick?: (element: MouseEvent) => void;
}

export function Button(props: IProps) {
  return (
    <Container {...props} onClick={props.onClick}>
      {props.icon && (
        <IconWrapper>
          <props.icon size={`${16 * (props.size ?? 1)}px`} color={props.iconColor ?? 'inherit'} />
        </IconWrapper>
      )}
      {props.children}
    </Container>
  );
}
