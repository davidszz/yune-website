import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  padding-top: 128px;
  padding-bottom: 64px;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

export const MainSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainText = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 3rem;

    color: var(--white);

    text-align: center;
    line-height: 3.2rem;
    
    max-width: 500px;
  }

  & > h4 {
    margin-top: 12px;
    
    font-size: 1.2rem;
    font-weight: 400;

    text-align: center;
    
    max-width: 768px;
  }

  & > button {
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;

    & > h1 {
      font-size: 2.4rem;

      text-align: left;
      line-height: 2.5rem;
    }

    & > h4 {
      font-size: 1rem;
      text-align: left;
    }
  }
`;