import { FaArrowUp } from 'react-icons/fa';
import { scroller } from 'react-scroll';

import { Container } from './styles';

interface IProps {
  scrollTo: string;
}

export function ScrollToTop({ scrollTo }: IProps) {
  return (
    <Container onClick={() => scroller.scrollTo(scrollTo, { smooth: true })}>
      <FaArrowUp />
    </Container>
  );
}
