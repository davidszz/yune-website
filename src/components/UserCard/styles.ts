import styled from 'styled-components';

export interface IUserCardProps {
  width?: string;
  height?: string;
}

export const Container = styled.div<IUserCardProps>`
  position: relative;

  width: 100%;
  max-width: ${(props) => props.width ?? '300px'};
  min-width: ${(props) => props.width ?? '300px'};
  height: ${(props) => props.height ?? 'auto'};

  border-radius: 8px;

  overflow: hidden;

  background-color: var(--user-card-background);

  @media (max-width: 512px) {
    min-width: 0px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 80px;

  background-color: ${(props) => props.color};
`;

export const Avatar = styled.div`
  position: absolute;

  left: 22px;
  top: 42px;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  overflow: hidden;
  z-index: 1;
  
  box-shadow: 0 0 0 6px var(--user-card-background);
`;

export const Header = styled.div`
  padding: 64px 16px 16px;
`;

export const Username = styled.span`
  font-size: 20px;
  font-weight: 500;

  color: var(--white);

  & > span {
    margin-left: 2px;
    color: var(--support);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  margin-bottom: 12px;

  background-color: var(--borders);
`;

export const Activity = styled.div`
  padding: 0 16px 12px;
`;

export const ActivityHeader = styled.div`
  width: 100%;
  
  margin-bottom: 8px;
`;

export const ActivityHeaderTitle = styled.h3`
  color: var(--base-text);

  font-family: 'Montserrat', 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 600;

  text-transform: uppercase;
`;

export const ActivityBody = styled.div`
  display: flex;
`;

export const ActivityIcon = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;

  border-radius: 4px;

  margin-right: 10px;

  overflow: hidden;

  & > img {
    width: 60px;
    height: 60px;
  }
`;

export const ActivityContent = styled.div`
  flex-grow: 1;

  overflow: hidden;
`;

export const ActivityContentTitle = styled.h3`
  color: var(--gray);

  width: 100%;

  font-size: .9rem;
  font-weight: 500;

  line-height: 18px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ActivityContentDetail = styled.div`
  color: var(--base-text);

  font-size: .82rem;
  font-weight: 400;

  line-height: 18px;
`;

export const ActivityContentState = styled.div`
  color: var(--base-text);

  font-size: .82rem;
  font-weight: 400;

  line-height: 18px;

  & > img, & > span > img {
    display: inline-block;
    margin-right: 6px!important;
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }
`;
