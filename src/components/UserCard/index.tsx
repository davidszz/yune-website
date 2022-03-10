import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Twemoji from 'react-twemoji';

import { Util } from "@utils/Util";
import {
  IUserCardProps,
  Container,
  Avatar,
  Status,
  Banner,
  Header,
  Username,
  Divider,
  CustomStatus,
  Activities,
  Activity,
  ActivityHeader,
  ActivityHeaderTitle,
  ActivityBody,
  ActivityIcon,
  ActivityContent,
  ActivityContentTitle,
  ActivityContentDetail,
  ActivityContentState,
  SpotifyWrapper,
  Spotify,
  SpotifyIcon,
  SpotifyContent,
  SpotifySong,
  SpotifyAuthor,
  SpotifyAlbum,
  SpotifyProgress,
  SpotifyProgressBar,
  SpotifyProgressDuration,
} from './styles';

const ActivityTypes = [
  'Jogando',
  'Transmitindo:',
  'Ouvindo',
  'Assistindo',
  '',
  'Competindo em:'
];

const StatusColors = {
  dnd: 'var(--red)',
  idle: 'var(--yellow)',
  online: 'var(--green)',
  offline: 'var(--support)'
};

interface IProps extends IUserCardProps {
  avatar: string;
  username: string;
  discriminator: string;
  status: string;
  customStatus?: {
    emoji?: {
      name: string;
      id?: string;
      animated?: boolean;
    };
    text: string;
  };
  activity?: {
    type: number;
    name?: string;
    icon?: string;
    title?: string;
    detail?: string;
    state?: string;
    timestamps?: {
      start: number;
      end?: number;
    };
  };
  spotify?: {
    song: string;
    author?: string;
    album?: string;
    icon?: string;
    timestamps: {
      start: number;
      end: number;
    };
  };
}

export function UserCard({
  activity,
  avatar,
  discriminator,
  username,
  status,
  customStatus,
  spotify,
  ...props
}: IProps) {
  const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;
  const [spotifyTimer, setSpotifyTimer] = useState<number>(0);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (spotify) {
      if (spotifyTimer >= spotify.timestamps.end - spotify.timestamps.start) {
        return;
      }

      timerRef.current = setTimeout(() => {
        setSpotifyTimer(Math.min(Date.now() - spotify.timestamps.start, spotify.timestamps.end - spotify.timestamps.start));
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    }
  }, [spotify, spotifyTimer]);
  
  return (
    <Container {...props} listeningSpotify={!!spotify}>
      <Banner />
      <Avatar>
        <Image src={avatar} width="128px" height="128px" alt={`${username}'s avatar`} />
        <Status color={StatusColors[status as keyof typeof StatusColors]} />
      </Avatar>
      <Header>
        <Username>
          {username}<span>#{discriminator}</span>
        </Username>
      </Header>
      {customStatus && (
        <CustomStatus>
          {customStatus.emoji && (
            customStatus.emoji.id
            ? (
              <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://cdn.discordapp.com/emojis/${customStatus.emoji.id}.${customStatus.emoji.animated ? 'gif' : 'png'}`} width="18px" height="18px" alt={customStatus.emoji.name} />
              </span>
            )
            : (
              <Twemoji noWrapper={true}>
                <span>{customStatus.emoji.name}</span>
              </Twemoji>
            )
          )}
          {customStatus.text}
        </CustomStatus>
      )}
      {(activity || spotify) && (
        <>
          {(activity || customStatus) && (
            <Divider />
          )}
          <Activities>
            {activity && (
              <Activity>
                <ActivityHeader>
                  <ActivityHeaderTitle>
                    {`${ActivityTypes[activity.type]} ${activity.name}`}
                  </ActivityHeaderTitle>
                </ActivityHeader>
                <ActivityBody>
                  {activity.icon && (
                    <ActivityIcon>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={activity.icon} alt={activity.name} width="60px" height="60px" />
                    </ActivityIcon>
                  )}
                  <ActivityContent>
                    {activity.title && (
                      <ActivityContentTitle>
                        {activity.title}
                      </ActivityContentTitle>
                    )}

                    {activity.detail && (
                      <ActivityContentDetail>
                        {activity.detail}
                      </ActivityContentDetail>
                    )}

                    {activity.state && (
                      <ActivityContentState>
                        {activity.state}
                      </ActivityContentState>
                    )}
                  </ActivityContent>
                </ActivityBody>
              </Activity>
            )}
            {spotify && (
              <SpotifyWrapper>
                <Spotify>
                  <SpotifyIcon>
                    <Image src={spotify.icon ?? '/assets/app-icons/spotify.png'} width="88px" height="88px" alt={spotify.song} />
                  </SpotifyIcon>
                  <SpotifyContent>
                    <SpotifySong>
                      {spotify.song}
                    </SpotifySong>

                    {spotify.author && (
                      <SpotifyAuthor>
                        de {spotify.author}
                      </SpotifyAuthor>
                    )}

                    {spotify.album && (
                      <SpotifyAlbum>
                        do álbum {spotify.album}
                      </SpotifyAlbum>
                    )}
                  </SpotifyContent>
                </Spotify>
                <SpotifyProgress>
                  <SpotifyProgressBar progress={Math.max(spotifyTimer / (spotify.timestamps.end - spotify.timestamps.start), 0)}/>
                  <SpotifyProgressDuration>
                    <span>{Util.spotifyDuration(spotifyTimer ? Math.min(spotifyTimer, spotify.timestamps.end - spotify.timestamps.start) : 0)}</span>
                    <span>{Util.spotifyDuration(spotify.timestamps.end - spotify.timestamps.start)}</span>
                  </SpotifyProgressDuration>
                </SpotifyProgress>
              </SpotifyWrapper>
            )}
          </Activities>
        </>
      )}
    </Container>
  );
}