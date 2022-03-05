import type { NextPage } from 'next'
import { useEffect } from 'react';
import { FaCode, FaStar, FaPaintRoller } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from '@components/Navbar'
import { Head } from '@components/Head';
import { OverlayWrapper } from '@components/OverlayWrapper';
import { Button } from '@components/Button';
import { 
  Main,
  Section, 
  MainText, 
  ServicesTitle, 
  ServicesWrapper, 
  Services, 
  Service, 
  ServiceTitle, 
  ServiceDescription, 
  TeamWrapper, 
  TeamTitle, 
  Team, 
  TeamMember, 
  TeamMemberAvatar, 
  TeamMemberAvatarWrapper,
  TeamMemberUsername,
  TeamMemberRoles,
  TeamMemberRole,
  TeamMemberAboutMe,
  TeamDescription,
  TeamText,
} from '@styles/pages/home';

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      once: true,
    });
  }, []);

  return (
    <OverlayWrapper>
      <Head title="Yune Store - Inicio"/>

      <Navbar />

      <Main>
        <Section className="main-section">
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
            <ServicesTitle data-aos="fade-up">
              Por que utilizar de nossos serviços?
            </ServicesTitle>
            <Services>
              <Service data-aos="fade-right" data-aos-delay="100">
                <FaCode size="56px" color="var(--primary)"/>
                <ServiceTitle>
                  Clean Code
                </ServiceTitle>
                <ServiceDescription>
                  Aplicamos clean code em todos nosso projetos para permitir
                  que o desempenho de nossas aplicações alcance o nível máximo!
                </ServiceDescription>
              </Service>

              <Service data-aos="fade-right" data-aos-delay="200">
                <FaStar size="56px" color="var(--yellow)"/>
                <ServiceTitle>
                  Avaliação
                </ServiceTitle>
                <ServiceDescription>
                  Todos clientes que utilizaram ou utilizam de nossos serviços
                  afirmam uma alta qualidade e ótimo suporte.
                </ServiceDescription>
              </Service>

              <Service data-aos="fade-right" data-aos-delay="300">
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

        <Section>
          <TeamWrapper>
            <TeamText>
              <TeamTitle data-aos="fade-up">
                Conheça nossa equipe
              </TeamTitle>
              <TeamDescription data-aos="fade-up">
                É sempre bom saber quem está por traz dos produtos que adquirimos para termos certeza da qualidade e confiança do produto!
              </TeamDescription>
            </TeamText>

            <Team data-aos="fade-up">
              <TeamMember>
                <TeamMemberAvatarWrapper>
                  <TeamMemberAvatar src="https://cdn.discordapp.com/avatars/757379507358531675/5d8bef14c0ef17e707e04411d9a33d44.webp?size=128" width="96px" height="96px" />
                </TeamMemberAvatarWrapper>
                <TeamMemberUsername>
                  Sasuke<span>#8980</span>
                </TeamMemberUsername>
                <TeamMemberRoles>
                  <TeamMemberRole color="var(--primary)">
                    Admin
                  </TeamMemberRole>
                  <TeamMemberRole color="var(--pink)">
                    Developer
                  </TeamMemberRole>
                </TeamMemberRoles>
                <TeamMemberAboutMe>
                  Desenvolvedor Pleno FullStack. Estudante de ciências da computação com conhecimento avançado em C#.
                </TeamMemberAboutMe>
              </TeamMember>

              <TeamMember>
                <TeamMemberAvatarWrapper>
                  <TeamMemberAvatar src="https://cdn.discordapp.com/avatars/757379507358531675/5d8bef14c0ef17e707e04411d9a33d44.webp?size=128" width="96px" height="96px" />
                </TeamMemberAvatarWrapper>
                <TeamMemberUsername>
                  Sasuke<span>#8980</span>
                </TeamMemberUsername>
                <TeamMemberRoles>
                  <TeamMemberRole color="var(--primary)">
                    Admin
                  </TeamMemberRole>
                  <TeamMemberRole color="var(--pink)">
                    Developer
                  </TeamMemberRole>
                </TeamMemberRoles>
                <TeamMemberAboutMe>
                  Desenvolvedor Pleno FullStack. Estudante de ciências da computação com conhecimento avançado em C#.
                </TeamMemberAboutMe>
              </TeamMember>
            </Team>
          </TeamWrapper>
        </Section>
      </Main>
    </OverlayWrapper>
  );
}

export default Home
