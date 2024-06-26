import { DotsLoader } from '@components/DotsLoader';

import { Wrapper } from './styles';

export function LoadingScreen() {
  return (
    <Wrapper>
      <DotsLoader scale={0.6} />
    </Wrapper>
  );
}
