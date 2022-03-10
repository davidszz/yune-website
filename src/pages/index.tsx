import 'aos/dist/aos.css';

import Aos from 'aos';
import { ActivityType } from 'discord-api-types/v10';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCode, FaStar, FaPaintRoller } from 'react-icons/fa';
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
// import { SearchInput } from '@components/SearchInput';
import { 
  Main,
  Section, 
  MainText, 
  ServicesWrapper, 
  Services, 
  Service, 
  ServiceTitle, 
  ServiceDescription, 
  TeamWrapper, 
  Team,
  // MatchesWrapper,
  // MatchSearchInputWrapper,
  // Matches,
} from '@styles/pages/home';

export default function Home() {
  const [users, setUsers] = useState<LanyardData[]>([]);
  const { loading, status } = useLanyard({ 
    userId: TEAM_USERS_IDS, socket: true 
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

      <Main>
        <Section className="main-section">
          <MainText>
            <h1>
              Torne o seu servidor
              <br/>
              um lugar melhor!
            </h1>
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
            <HeadLine>
              <Subtitle data-aos="fade-up">
                Por que utilizar
                <br/>
                de nossos serviços?
              </Subtitle>
            </HeadLine>
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

        {/* <Section>
          <MatchesWrapper>
            <HeadLine marginBottom='24px'>
              <Subtitle>
                Busque uma partida
                <br />
                ativa em tempo real!
              </Subtitle>
              <Paragraph>
              </Paragraph>
            </HeadLine>

            <MatchSearchInputWrapper>
              <SearchInput 
                width="500px"
                placeholder="Buscar por partidas..."
                value={searchMatchInput}
                onChange={handleSearchMatchInputChange}
                loading={loadingSearchMatchInput}
                disabled={loadingSearchMatchInput}
                onPressEnter={handleSearchMatches}
              />
            </MatchSearchInputWrapper>

            <Matches>
            </Matches>
          </MatchesWrapper>
        </Section> */}

        <Section>
          <TeamWrapper>
            <HeadLine>
              <Subtitle data-aos="fade-up">
                Conheça nossa equipe
              </Subtitle>
              <Paragraph data-aos="fade-up">
                É sempre bom saber quem está por traz dos produtos que adquirimos para termos certeza da qualidade e confiança do produto!
              </Paragraph>
            </HeadLine>

            <Team data-aos="fade-up">
              {loading ? <div>Loading</div> : users.map(({ discord_user, discord_status, spotify, activities }) => {
                const customStatus = activities.find(x => x.type === ActivityType.Custom);
                const activity = activities.filter(x => x.type !== ActivityType.Custom && !x.id.startsWith('spotify:'))[0];
                
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