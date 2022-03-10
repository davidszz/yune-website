import styled from "styled-components";

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

  &.main-section {
    min-height: calc(100vh - 88px);
  }

  @media (max-width: 768px) {
    padding: 80px 0;

    &.main-section {
      min-height: calc(100vh - 78px);
    }
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
    line-height: 1.625rem;
    
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

export const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  margin-top: 80px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const MatchesWrapper = styled.div`
  width: 1200px;
  margin: 0 24px;
`;

export const MatchSearchInputWrapper = styled.div`
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Matches = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  padding: 24px;
  margin-top: 64px;
`;