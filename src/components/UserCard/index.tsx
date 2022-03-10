import { ActivityType } from "discord-api-types/v10";
import Image from "next/image";
import Twemoji from 'react-twemoji';

import {
  IUserCardProps,
  Container,
  Banner,
  Avatar,
  Header,
  Username,
  Divider,
  Activity,
  ActivityHeader,
  ActivityHeaderTitle,
  ActivityBody,
  ActivityIcon,
  ActivityContent,
  ActivityContentTitle,
  ActivityContentDetail,
  ActivityContentState,
} from './styles';

const ActivityTypes = [
  'Jogando',
  'Transmitindo:',
  'Ouvindo',
  'Assistindo',
  '',
  'Competindo em:'
];

interface IProps extends IUserCardProps {
  bannerColor?: string;
  avatar: string;
  username: string;
  discriminator: string;
  activity?: {
    type: number;
    name?: string;
    icon?: string;
    title?: string;
    detail?: string;
    state?: string;
    emoji?: string;
  };
}

export function UserCard({
  activity,
  avatar,
  discriminator,
  username,
  bannerColor = 'var(--primary)',
  ...props
}: IProps) {
  return (
    <Container {...props}>
      <Banner color={bannerColor}/>
      <Avatar>
        <Image src={avatar} width="80px" height="80px" alt={`${username}'s avatar`} />
      </Avatar>
      <Header>
        <Username>
          {username}<span>#{discriminator}</span>
        </Username>
      </Header>
      {activity && (
        <Activity>
          <Divider />
          <ActivityHeader>
            <ActivityHeaderTitle>
              {`${ActivityTypes[activity.type]} ${activity.name}`}
            </ActivityHeaderTitle>
          </ActivityHeader>
          <ActivityBody>
            {activity.icon && (
              <ActivityIcon>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={activity.icon} alt={activity.name} />
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
                  {activity.type === ActivityType.Custom && activity.emoji && (
                    activity.emoji.startsWith('http')
                      ? <Image src={activity.emoji} width="22px" height="22px" alt={activity.detail} />
                      : (
                        <Twemoji options={{ className: 'discord-emoji' }} noWrapper={true}>
                          <span>{activity.emoji}</span>
                        </Twemoji>
                      )
                  )}
                  {activity.state}
                </ActivityContentState>
              )}
            </ActivityContent>
          </ActivityBody>
        </Activity>
      )}
    </Container>
  );
}