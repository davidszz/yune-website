import 'aos/dist/aos.css';

import Aos from 'aos';
import { ActivityType, APIUser, GatewayActivity } from 'discord-api-types/v10';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCode, FaStar, FaPaintRoller } from 'react-icons/fa';

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

interface IPresence {
  type: number;
  icon?: string;
  details?: string;
  name?: string;
  state?: string;
  emoji?: string;
}

export default function Home() {
  const [team, setTeam] = useState<{ users: (APIUser & { presence?: IPresence })[] }>();
  const [loadingTeam, setLoadingTeam] = useState(false);
  
  useEffect(() => {
    Aos.init({
      duration: 400,
      once: true,
    });

    async function fetchTeam() {
      setLoadingTeam(true);
      await fetch('/api/team')
        .then(res => res.json())
        .then(res => setTeam(res))
        .finally(() => setLoadingTeam(false));
    }

    fetchTeam();
  }, []);

  useEffect(() => {
    if (!team?.users.length) {
      return;
    }

    const ws = new WebSocket('wss://api.lanyard.rest/socket');
    const heartbeat = (interval: number) => setInterval(() => {
      ws.send(JSON.stringify({ op: 3 }));
    }, interval);

    let interval: NodeJS.Timer | undefined;
    ws.onopen = () => {
      ws.send(JSON.stringify({
        op: 2,
        d: {
          subscribe_to_ids: team.users.map(x => x.id),
        },
      }));
    }

    ws.onmessage = evt => {
      const message = JSON.parse(evt.data) as { op: number, d: any, t: string };
      switch (message.op) {
        case 1: {
          interval = heartbeat(message.d.heartbeat_interval as number);
          break;
        }

        case 0: {
          const dataToPresence = (d: GatewayActivity): IPresence => {
            return {
              type: d.type,
              details: d.details ?? undefined,
              name: d.name,
              icon: d.assets?.large_image ? Util.makeAssetUrl(d.assets.large_image, d.application_id) : undefined,
              state: d.state ?? undefined,
              emoji: d.type === ActivityType.Custom && d.emoji?.id
                ? `https://cdn.discordapp.com/emojis/${d.emoji.id}.${d.emoji?.animated ? 'gif' : 'png'}?size=32`
                : undefined,
            };
          };

          if (message.t === 'INIT_STATE') {
            const presences: (IPresence & { userId: string })[] = [];

            for (const key in message.d) {
              const data = message.d[key];

              if (data.activities[0]) {
                presences.push({
                  userId: data.discord_user.id,
                  ...dataToPresence(data.activities[0]),
                });
              }
            }
            
            setTeam(state => {
              if (!state) return state;
              return {
                users: state.users.map(x => {
                  return {
                    ...x,
                    presence: presences.find(p => p.userId === x.id),
                  };
                })
              }
            });
          } else if (message.t === 'PRESENCE_UPDATE') {
            setTeam(state => {
              if (!state) return state;
              return {
                users: state.users.map(x => {
                  return {
                    ...x,
                    presence: message.d.activities[0] ? dataToPresence(message.d.activities[0]) : undefined,
                  };
                }),
              }
            });
          }
          break;
        }
      }
    }

    return () => {
      if (typeof interval !== 'undefined') {
        clearInterval(interval);
      }
      
      if (ws) {
        ws.close();
      }
    }
  }, [team]);

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
              {team && team.users.length > 0 ? team.users.map(user => {
                return (
                  <Link href={`https://discord.com/users/${user.id}`} key={`team_member_profile_${user.id}`}>
                    <a target="_blank">
                      <UserCard 
                        height="100%"
                        username={user.username}
                        discriminator={user.discriminator}
                        bannerColor={(user as any).banner_color || (user.accent_color ? user.accent_color.toString(16) : undefined)}
                        activity={user.presence && {
                          type: user.presence.type,
                          name: user.presence.name,
                          title: user.presence.details,
                          state: user.presence.state,
                          icon: user.presence.icon,
                          emoji: user.presence.type === ActivityType.Custom ? user.presence.emoji : undefined,
                        }}
                        avatar={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar?.startsWith('a_') ? 'gif' : 'png'}`}
                      />
                    </a>
                  </Link>
                );
              }) : <div>Loading</div>}
            </Team>
          </TeamWrapper>
        </Section>
      </Main>
      <Footer />
    </OverlayWrapper>
  );
}