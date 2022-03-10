import { IDotsLoaderProps, Container } from './styles';

interface IProps extends IDotsLoaderProps {}

export function DotsLoader(props: IProps) {
  return (
    <Container {...props}>
      <div/>
      <div/>
      <div/>
    </Container>
  );
}