import Image from 'next/image';
import styled from "styled-components";

export const NavbarWrapper = styled.header`
  width: 100%;
  height: 88px;

  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--background);
  
  border-bottom: 1px solid var(--borders);

  transition: height 300ms;
  
  z-index: 500;
  
  @media (max-width: 768px) {
    height: 78px;
  }
`;

export const NavbarContent = styled.div`
  width: 1120px;
  height: 100%;
  
  margin: 0 24px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 0 12px;
  }
`;

export const Logo = styled(Image)`
  min-width: 56px;
  min-height: 56px;
`;

export const Nav = styled.nav<{ open?: boolean }>`
  display: flex;

  @media (max-width: 1200px) {
    display: ${(props) => props.open ? 'flex' : 'none'};
    position: absolute;
    top: 88px;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: calc(100% - 88px);
    min-height: 400px;

    background: var(--background);

    & > ul {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      width: 100%;
      height: 100%;

      & > li {
        width: 100%;

        background-image: linear-gradient(to right, var(--background-hover), transparent);

        line-height: 64px;

        margin: 4px 0;
        
        & > a {
          display: block;
          padding: 0 24px;

          &:hover {
            background: var(--background-hover);
          }
        }
      }
    }
  }
`;

export const Menu = styled.ul`
  height: 85px;
  width: 480px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLink = styled.li`
  font-size: 1rem;

  margin-left: 32px;
  margin-top: 0;

  & > a {
    padding: 32px 0;
    color: var(--support);

    cursor: pointer;
    transition: color 300ms;

    &:hover {
      color: var(--gray);
    }
  }
`;

export const Access = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const ModalWarnIcon = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;

  margin-bottom: 24px;

  & > svg {
    color: var(--red);
  }
`;

export const ModalWarnTitle = styled.h2`
  width: 90%;

  font-size: 1.4rem;
  font-weight: 500;

  text-align: center;

  margin: 0 auto;
`;

export const ModalWarnDescription = styled.div`
  width: 90%;

  font-size: .9rem;
  font-weight: 400;

  text-align: center;

  margin: 0 auto;
  margin-top: 16px;

  padding-bottom: 24px;
`;
