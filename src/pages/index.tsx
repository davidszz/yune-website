import type { NextPage } from 'next'

import { Navbar } from '@components/Navbar'
import { Head } from '@components/Head';
import { OverlayWrapper } from '@components/OverlayWrapper';
import { Button } from '@components/Button';
import { Main, MainSection, MainText } from '@styles/pages/home';

const Home: NextPage = () => {
  return (
    <OverlayWrapper>
      <Head title="Yune Store - Inicio"/>

      <Navbar />

      <Main>
        <MainSection>
          <MainText>
            <h1>Faça um upgrade no seu servidor!</h1>
            <h4>Adquira um de nossos bots e deixe o seu servidor ainda melhor! Serviços de alta qualidade e sempre atualizado para você.</h4>
            <Button
              uppercase
              size={1.3}
              hoverDelay={0}
            >
              Servidor de suporte
            </Button>
          </MainText>
        </MainSection>
      </Main>
    </OverlayWrapper>
  );
}

export default Home
