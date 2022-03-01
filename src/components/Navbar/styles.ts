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

  border-bottom: 1px solid var(--borders);
  
  z-index: 500;
`;

export const NavbarContent = styled.div`
  width: 1120px;
  height: 100%;
  
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
  color: var(--suport);

  margin-left: 32px;
  margin-top: 0;

  & > a {
    padding: 32px 0;

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