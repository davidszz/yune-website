import { ISpinnerProps, Container } from './styles';

interface IProps extends ISpinnerProps {
  size?: string;
}

export function Spinner({ size }: IProps) {
  return <Container size={size} />;
}
