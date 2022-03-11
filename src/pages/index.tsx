import 'aos/dist/aos.css';

import Aos from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LanyardData, useLanyard } from 'react-use-lanyard';

import { TEAM_USERS_IDS } from '@utils/Constants';
import { Util } from '@utils/Util';
import { Navbar } from '@components/Navbar'
import { Footer } from '@components/Footer'
import { Head } from '@components/Head';
import { OverlayWrapper } from '@components/OverlayWrapper';
import { Button } from '@components/Button';
import { HeadLine } from '@components/HeadLine';
import { Subtitle } from '@components/HeadLine/Subtitle';
import { Paragraph } from '@components/HeadLine/Paragraph';
import { UserCard } from '@components/UserCard';
import { DotsLoader } from '@components/DotsLoader';
import { ScrollToTop } from '@components/ScrollToTop';
import { 
  Main,
  Section, 
  MainText, 
  ServicesWrapper, 
  Services,
  Service,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription, 
  TeamWrapper, 
  Team,
  HeadLineLeft,
  FeaturesWrapper,
} from '@styles/pages/home';

export default function Home() {
  const [users, setUsers] = useState<LanyardData[]>([]);
  const { loading, status } = useLanyard({ 
    userId: TEAM_USERS_IDS, 
    socket: true,
  });
  
  useEffect(() => {
    Aos.init({
      duration: 400,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (status) {
      if ('discord_user' in status) {
        setUsers(state => {
          return [
            ...state.filter(x => x.discord_user.id !== status.discord_user.id),
            status,
          ].sort((a, b) => Number(a.discord_user.id) - Number(b.discord_user.id));
        });
      } else {
        const newUsers: LanyardData[] = [];
        for (const key in status as Record<string, LanyardData>) {
          newUsers.push(status[key]);
        }

        setUsers(state => {
          return [
            ...state.filter(x => !newUsers.some(u => u.discord_user.id === x.discord_user.id)),
            ...newUsers,
          ].sort((a, b) => Number(a.discord_user.id) - Number(b.discord_user.id));
        });
      }
    }
  }, [status]);

  return (
    <OverlayWrapper>
      <Head title="Yune Store - Inicio"/>

      <Navbar />

      <ScrollToTop scrollTo="main"/>
      <Main>
        <Section id="main" className="main-section">
          <MainText>
            <h1>
              Torne o seu servidor
              <br/>
              um lugar melhor!
            </h1>
            <h2>Adquira um de nossos bots e deixe o seu servidor ainda melhor! Serviços de alta qualidade e sempre atualizados para você.</h2>
            <Link href="/discord">
              <a target="_blank">
                <Button
                  uppercase
                  size={1.3}
                  hoverDelay={0}
                >
                  Servidor de suporte
                </Button>
              </a>
            </Link>
          </MainText>
        </Section>

        <Section id="features">
          <FeaturesWrapper>
            <HeadLineLeft data-aos="fade-right">
              <Subtitle>
                Tenha os melhores
                <br/>
                recursos em mãos!
              </Subtitle>
              <Paragraph>
                Obtenha recursos exclusivos que só nós possuímos! Já imaginou como seria irado ter um perfil
                elegante e estilizado para os membros do seu servidor? Além de poder trocar o banner do perfil com apenas um comando!
                <br />
                <br />
                Além disso, ao criar uma fila os jogadores poderão ver o rank dos demais jogadores além de ter uma
                pontuação calibrada após a finalização da partida de acordo com o rank dos demais.
              </Paragraph>
            </HeadLineLeft>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img data-aos="fade-right" data-aos-delay="100" src="/assets/features.png" alt="Recursos" />
          </FeaturesWrapper>
        </Section>

        <Section id="services">
          <ServicesWrapper>
            <HeadLine data-aos="fade-up">
              <Subtitle>
                Por que utilizar
                <br/>
                de nossos serviços?
              </Subtitle>
            </HeadLine>
            <Services>
              <Service data-aos="fade-right" data-aos-delay="100">
                <ServiceIcon>
                  <Image src="/assets/icons/security.png" width="64px" height="64px" alt="Segurança"/>
                </ServiceIcon>
                <ServiceTitle>
                  Segurança
                </ServiceTitle>
                <ServiceDescription>
                  Garantimos total segurança aos nossos clientes
                  além de não termos acesso a suas informações.
                </ServiceDescription>
              </Service>

              <Service data-aos="fade-right" data-aos-delay="200">
                <ServiceIcon>
                  <Image src="/assets/icons/support.png" width="64px" height="64px" alt="Suporte"/>
                </ServiceIcon>
                <ServiceTitle>
                  Suporte 24/7
                </ServiceTitle>
                <ServiceDescription>
                  Nossa equipe de suporte prioriza totalmente o atendimento
                  de nossos cliente garantindo um atendimento rápido e eficiente.
                </ServiceDescription>
              </Service>

              <Service data-aos="fade-right" data-aos-delay="300">
                <ServiceIcon>
                  <Image src="/assets/icons/host.png" width="64px" height="64px" alt="Suporte"/>
                </ServiceIcon>
                <ServiceTitle>
                  Hospadagem
                </ServiceTitle>
                <ServiceDescription>
                  Todos os bots de nossos clientes possuem
                  hospedagem rápida com certificado de segurança
                  em seus bots.
                </ServiceDescription>
              </Service>

              <Service data-aos="fade-right" data-aos-delay="400">
                <ServiceIcon>
                  <Image src="/assets/icons/fast.png" width="64px" height="64px" alt="Suporte"/>
                </ServiceIcon>
                <ServiceTitle>
                  Entrega rápida
                </ServiceTitle>
                <ServiceDescription>
                  As comprar de nossos serviços são feitas de forma
                  rápida e fácil! Assim que o cliente efetuar o pagamento
                  uma instância será criada e entregue o mais rápido possível.
                </ServiceDescription>
              </Service>

              <Service data-aos="fade-right" data-aos-delay="500">
                <ServiceIcon>
                  <Image src="/assets/icons/hidden.png" width="64px" height="64px" alt="Suporte"/>
                </ServiceIcon>
                <ServiceTitle>
                  Proteção VPN
                </ServiceTitle>
                <ServiceDescription>
                  Todos nossos bots utilizam de servidores proxy
                  com criptografia de ponta a ponta para proteger
                  suas informações e manter seus dados seguros.
                </ServiceDescription>
              </Service>
            </Services>
          </ServicesWrapper>
        </Section>

        <Section id="team">
          <TeamWrapper>
            <HeadLine data-aos="fade-up">
              <Subtitle>
                Conheça nossa equipe
              </Subtitle>
              <Paragraph>
                É sempre bom saber quem está por traz dos produtos que adquirimos para termos certeza da qualidade e confiança do produto!
              </Paragraph>
            </HeadLine>

            <Team data-aos="fade-up">
              {loading ? <DotsLoader scale={.5}/> : users.map(({ discord_user, discord_status, spotify, activities }) => {
                const customStatus = activities.find(x => x.type === 4);
                const activity = activities.filter(x => x.type !== 4 && !x.id.startsWith('spotify:'))[0];
                
                return (
                  <UserCard
                    key={`team_member_profile_${discord_user.id}`}
                    height="100%"
                    username={discord_user.username}
                    discriminator={discord_user.discriminator}
                    status={discord_status}
                    customStatus={customStatus && {
                      emoji: customStatus.emoji,
                      text: customStatus.state!,
                    }}
                    activity={activity && {
                      type: activity.type,
                      name: activity.name,
                      title: activity.name,
                      detail: activity.details,
                      state: activity.state,
                      icon: Util.makeAssetUrl(activity.assets?.large_image, activity.application_id),
                      timestamps: activity.timestamps,
                    }}
                    spotify={spotify && {
                      song: spotify.song,
                      album: spotify.album,
                      author: spotify.artist,
                      icon: spotify.album_art_url,
                      timestamps: spotify.timestamps,
                    }}
                    avatar={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.${discord_user.avatar?.startsWith('a_') ? 'gif' : 'png'}`}
                  />
                );
              })}
            </Team>
          </TeamWrapper>
        </Section>
      </Main>
      <Footer />
    </OverlayWrapper>
  );
}