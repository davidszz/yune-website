import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: var(--background);
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1120px;

  display: grid;
  grid-template-columns: repeat(14, 1fr);

  padding: 80px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  grid-column: span 3;

  @media (max-width: 768px) {
    grid-column: span 2;
    margin-bottom: 48px;
  }
`;

export const MainContentImage = styled.img`
  width: 144px;
  height: 36px;

  min-width: 144px;
  min-height: 36px;
`;

export const MainContentText = styled.span`
  font-size: .875rem;
  font-weight: 400;

  color: var(--text);

  line-height: 1.5rem;
  margin-top: 24px;
`;

export const SpaceDiv = styled.div`
  grid-column: span 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FooterMenu = styled.ul`
  display: block;

  grid-column: span 4;

  @media (max-width: 768px) {
    grid-column: span 1;
  }

  @media (max-width: 520px) {
    grid-column: 1;
    margin-bottom: 24px;
  }
`;

export const FooterMenuTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  
  color: var(--white);

  line-height: 2.25rem;
`;

export const FooterMenuLink = styled.li`
  display: flex;

  & > a {
    color: var(--text);

    line-height: 2.25rem;
    transition: color 300ms;
    
    &:hover {
      color: white;
    }
  }
`;