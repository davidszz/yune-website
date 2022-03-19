import styled from 'styled-components';

export interface IUserCardProps {
  width?: string;
  height?: string;
}

export const Container = styled.div<IUserCardProps>`
  position: relative;

  width: 360px;
  min-width: 300px;
  min-height: 460px;

  color: var(--base-text);
  background-color: var(--user-card-background);

  border-radius: 4px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  padding-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
  }
`;

export const Banner = styled.div<{ url?: string }>`
  width: 100%;
  height: 120px;

  background-color: var(--background);
  background-image: url(${({ url }) => url ?? '/assets/banner.png'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Avatar = styled.div`
  width: 128px;
  height: 128px;

  border-radius: 50%;

  & > span {
    border-radius: 50%;
  }

  position: absolute;
  top: 56px;
  left: 26px;

  box-shadow: 0 0 0 8px var(--user-card-background);

  z-index: 1;
`;

export const Status = styled.div`
  position: absolute;
  top: 100%;
  right: 12px;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  background-color: ${(props) => props.color};
  box-shadow: 0 0 0 8px var(--user-card-background);

  transform: translateY(-100%);
`;

export const Header = styled.div`
  position: relative;
  padding: 80px 16px 16px;
`;

export const Username = styled.span`
  color: var(--white);

  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Open Sans', 'Montserrat', sans-serif;

  & > span {
    color: var(--text);
  }
`;

export const BadgesWrapper = styled.div`
  position: absolute;

  top: 16px;
  right: 16px;

  -webkit-box-pack: end;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  gap: 4px;

  max-width: 50%;
`;

export const Badge = styled.div`
  width: 22px;
  height: 22px;

  user-select: none;
  cursor: pointer;

  pointer-events: auto;
`;

export const Divider = styled.div`
  width: calc(100% - 32px);
  height: 1px;

  background-color: var(--borders);

  margin: 12px 16px;
`;

export const CustomStatus = styled.div`
  padding: 0 16px;

  font-size: 0.875rem;
  line-height: 1.2rem;

  & > span {
    margin-right: 6px;
  }

  & img {
    display: inline-block;
    vertical-align: middle;

    width: 18px;
    height: 18px;
  }
`;

export const Activities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Activity = styled.div`
  padding: 0 16px;
`;

export const ActivityHeader = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const ActivityHeaderTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  font-family: 'Montserrat', 'Roboto', sans-serif;

  text-transform: uppercase;
`;

export const ActivityBody = styled.div`
  display: flex;
  align-items: center;
`;

export const ActivityIcon = styled.div<{ url: string }>`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;

  border-radius: 6px;
  overflow: hidden;

  margin-right: 12px;

  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ActivityContent = styled.div`
  color: var(--gray);

  font-size: 0.8rem;
  font-family: 'Open Sans', 'Roboto', sans-serif;

  overflow: hidden;

  line-height: 1.125rem;
`;

export const ActivityContentTitle = styled.h3`
  width: 100%;

  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ActivityContentDetail = styled.div`
  color: var(--base-text);
`;

export const ActivityContentState = styled.div`
  color: var(--base-text);
`;

export const SpotifyWrapper = styled.div`
  padding: 0 16px;
`;

export const Spotify = styled.div`
  display: flex;
  align-items: center;
`;

export const SpotifyIcon = styled.div`
  width: 88px;
  height: 88px;

  min-width: 88px;
  min-height: 88px;

  border-radius: 2px;
  overflow: hidden;
`;

export const SpotifyContent = styled.div`
  margin-left: 12px;

  width: 100%;
  min-width: 50px;
  overflow: hidden;

  font-family: 'Open Sans', 'Roboto', sans-serif;
`;

export const SpotifySong = styled.h3`
  font-size: 0.95rem;
  line-height: 1.3rem;
`;

export const SpotifyAuthor = styled.div`
  font-size: 0.825rem;
  line-height: 1rem;

  margin-top: 4px;
`;

export const SpotifyAlbum = styled.div`
  font-size: 0.825rem;
  font-style: italic;

  line-height: 1rem;

  margin-top: 4px;
`;

export const SpotifyProgress = styled.div`
  width: 100%;

  margin-top: 12px;
`;

export const SpotifyProgressBarWrapper = styled.div`
  width: 100%;
  height: 4px;

  margin-bottom: 4px;

  background-color: var(--borders);

  border-radius: 2px;

  overflow: hidden;

  position: relative;
`;

export const SpotifyProgressBar = styled.div<{ progress?: number }>`
  position: absolute;
  top: 0;
  left: -${(props) => 100 - (props.progress ? props.progress * 100 : 0)}%;

  border-radius: 2px;

  width: 100%;
  height: 4px;

  background-color: var(--spotify-progress-bar);
`;

export const SpotifyProgressDuration = styled.div`
  width: 100%;

  font-size: 0.8rem;

  display: flex;
  justify-content: space-between;
`;
