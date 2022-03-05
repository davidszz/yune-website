import Image from "next/image";
import styled from "styled-components";
import tinycolor from 'tinycolor2';

export const Main = styled.main`
  margin: 0 auto;
`;

export const Section = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 160px 0px;

  border-bottom: 1px solid var(--borders);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const MainText = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 3.5rem;

    color: var(--white);

    text-align: center;
    line-height: 3.75rem;
    
    max-width: 680px;

    margin-bottom: 16px;
  }

  & > h2 {
    font-size: 1rem;
    font-weight: 400;

    color: var(--gray);

    text-align: center;
    
    max-width: 472px;

    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    & > h1 {
      font-size: 2.4rem;
      line-height: 2.5rem;
    }

    & > h2 {
      font-size: 1rem;
    }
  }
`;

export const ServicesWrapper = styled.div`
  width: 1200px;
  margin: 0 24px;
`;

export const ServicesTitle = styled.h3`
  font-size: 3rem;
  font-weight: 600;

  color: var(--base-text);

  text-align: center;
  line-height: 3.2rem;
  
  max-width: 680px;

  margin: 0 auto;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.9rem;
    line-height: 2.2rem;
  }
`;

export const Services = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  gap: 32px;

  width: 100%;

  margin-top: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;

  grid-area: span 1;

  padding: 24px;

  border: 1px solid var(--borders);
  border-radius: 4px;

  background-color: rgba(255, 255, 255, .01);

  color: var(--gray);
`;

export const ServiceTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;

  margin-top: 16px;
`;

export const ServiceDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;

  line-height: 1.8rem;

  color: var(--text);

  margin-top: 16px;
`;

export const TeamWrapper = styled.div`
  width: 1200px;
  margin: 0 24px;
`;

export const TeamText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const TeamTitle = styled.h3`
  font-size: 3rem;
  font-weight: 600;

  color: var(--base-text);

  text-align: center;
  line-height: 3.2rem;

  max-width: 680px;

  margin: 0 auto;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.9rem;
    line-height: 2.2rem;
  }
`;

export const TeamDescription = styled.h4`
  font-size: 1rem;
  font-weight: 400;

  color: var(--base-text);

  max-width: 680px;

  line-height: 1.3rem;

  margin: 0 auto;
  text-align: center;
`;

export const Team = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  margin-top: 80px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const TeamMember = styled.div`
  min-width: 300px;
  max-width: 400px;

  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--borders);
  border-radius: 4px;

  background-color: rgba(255, 255, 255, .01);

  cursor: pointer;
  transition: box-shadow 300ms;
  user-select: none;

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, .6);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 200px;

    width: 100%;
  }
`;

export const TeamMemberAvatarWrapper = styled.div`  
  margin-top: 32px;
  margin-bottom: 12px;
`;

export const TeamMemberAvatar = styled(Image)`
  border-radius: 50%;
  background-color: var(--black);
`;

export const TeamMemberUsername = styled.span`
  max-width: 90%;
  
  font-size: 1.2rem;
  font-weight: 500;

  color: var(--white);

  text-align: center;
  line-height: 1.3rem;

  display: flex;
  flex-wrap: wrap;

  gap: 2px;

  margin-bottom: 12px;

  & > span {
    color: var(--support);
  }
`;

export const TeamMemberRoles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  max-width: 90%;
`;

export const TeamMemberRole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 12px;

  font-size: .8rem;
  font-weight: 400;

  text-align: center;
  line-height: .9rem;

  border-radius: 12px;
  
  color: ${(props) => tinycolor(props.color).isDark() ? 'var(--white)' : 'var(--black)'};

  background-color: ${(props) => props.color};
`;

export const TeamMemberAboutMe = styled.div`
  font-size: .9rem;
  font-weight: 400;

  max-width: 90%;

  text-align: center;
  line-height: 1.2rem;

  color: var(--text);

  margin-top: 16px;
  margin-bottom: 32px;
`;