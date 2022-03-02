import type { NextPage } from 'next'
import { FaCode, FaStar, FaPaintRoller } from 'react-icons/fa';

import { Navbar } from '@components/Navbar'
import { Head } from '@components/Head';
import { OverlayWrapper } from '@components/OverlayWrapper';
import { Button } from '@components/Button';
import { Main, Section, MainText, ServicesTitle, ServicesWrapper, Services, Service, ServiceTitle, ServiceDescription } from '@styles/pages/home';

const Home: NextPage = () => {
  return (
    <OverlayWrapper>
      <Head title="Yune Store - Inicio"/>

      <Navbar />

      <Main>
        <Section>
          <MainText>
            <h1>Torne o seu servidor um lugar melhor!</h1>
            <h2>Adquira um de nossos bots e deixe o seu servidor ainda melhor! Serviços de alta qualidade e sempre atualizados para você.</h2>
            <Button
              uppercase
              size={1.3}
              hoverDelay={0}
            >
              Servidor de suporte
            </Button>
          </MainText>
        </Section>

        <Section>
          <ServicesWrapper>
            <ServicesTitle>
              Por que utilizar de nossos serviços?
            </ServicesTitle>
            <Services>
              <Service>
                <FaCode size="56px" color="var(--primary)"/>
                <ServiceTitle>
                  Clean Code
                </ServiceTitle>
                <ServiceDescription>
                  Aplicamos clean code em todos nosso projetos para permitir
                  que o desempenho de nossas aplicações alcance o nível máximo!
                </ServiceDescription>
              </Service>

              <Service>
                <FaStar size="56px" color="var(--yellow)"/>
                <ServiceTitle>
                  Avaliação
                </ServiceTitle>
                <ServiceDescription>
                  Todos clientes que utilizaram ou utilizam de nossos serviços
                  afirmam uma alta qualidade e ótimo suporte.
                </ServiceDescription>
              </Service>

              <Service>
                <FaPaintRoller size="56px" color="var(--pink)"/>
                <ServiceTitle>
                  Customização
                </ServiceTitle>
                <ServiceDescription>
                  Nossos bots possuem customização de ponta a ponta para
                  que os usuários configurem de acordo com suas preferências.
                </ServiceDescription>
              </Service>
            </Services>
          </ServicesWrapper>
        </Section>
      </Main>
    </OverlayWrapper>
  );
}

export default Home
