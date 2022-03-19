import Image from 'next/image';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export const NavbarWrapper = styled.header<{ open?: boolean }>`
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

  z-index: 1000;

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

export const LogoLink = styled.a`
  @media (max-width: 1200px) {
    order: 1;
  }
`;

export const Logo = styled(Image)`
  min-width: 120px !important;
  min-height: 30px !important;
`;

export const Nav = styled.nav`
  display: flex;
  z-index: 1001;

  @media (max-width: 1200px) {
    display: none;
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

  margin-top: 0;

  &:not(:first-child) {
    margin-left: 32px;
  }

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
    order: 0;
  }
`;

export const UserBox = styled.div`
  position: relative;
`;

export const UserBoxContent = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;

  & > span {
    border-radius: 50%;
  }
`;

export const UserUsername = styled.div`
  margin-left: 12px;

  color: var(--white);

  font-size: 0.95rem;
  font-weight: 500;

  line-height: 1.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserDropdownIcon = styled.div<{ open?: boolean }>`
  margin-left: 6px;

  height: 12px;
  width: 12px;

  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ open }) => {
    if (open) {
      return `
        & > svg {
          transform: rotate(180deg);
        }
      `;
    }
  }}
`;

export const UserDropdown = styled.div<{ open?: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;

  margin-top: 12px;
  padding: 6px 8px;

  width: 220px;

  background: var(--background-tertiary);

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  border-radius: 4px;

  visibility: hidden;
  transform: translateY(12px);
  opacity: 0;

  transition: visibility 300ms, transform 300ms, opacity 300ms;

  ${({ open }) => {
    if (open) {
      return `
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
      `;
    }
  }}

  @media (max-width: 1200px) {
    left: auto;
    right: auto;
    left: 0;
  }
`;

export const UserDropownBtn = styled.div<{ hoverColor?: string; disabled?: boolean }>`
  width: 100%;

  padding: 6px 8px;

  font-size: 0.875rem;
  font-weight: 500;

  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ color }) => color ?? 'var(--text)'};

  cursor: pointer;

  & > div {
    width: 18px;
    height: 18px;

    font-size: 18px;
  }

  ${({ disabled, hoverColor }) => {
    if (disabled) {
      return `
        opacity: .6;
        cursor: not-allowed;
      `;
    }

    return `
      &:hover {
        background-color: ${hoverColor ?? 'var(--blurple)'};
        color: var(--gray);
      }
    `;
  }}
`;

export const UserDropdownSeparator = styled.div`
  width: 100%;
  height: 1px;

  background-color: rgba(255, 255, 255, 0.1);

  margin: 4px 0;
`;

export const LoginBtn = styled.button`
  background: none;

  outline: none;
  border: none;

  font-size: 12px;
  font-weight: 600;

  color: var(--white);

  cursor: pointer;
  text-transform: uppercase;

  display: flex;
  align-items: center;

  & > svg {
    margin-right: 6px;
    color: var(--primary);
  }

  @media (max-width: 768px) {
    padding: 12px;

    & > span {
      display: none;
    }

    & > svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const MobileMenuIcon = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 1200px) {
    display: block;
    order: 2;
  }
`;

export const NavMobileOverlay = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 1002;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);

  display: ${({ open }) => (open ? 'flex' : 'none')};

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  position: absolute;
  right: 0;
  top: 0;

  width: 300px;
  height: 100%;

  background-color: var(--background-secondary);

  border-radius: 8px 0 0 8px;

  padding: 24px 32px 24px 24px;
`;

export const NavMobileCloseMenuBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  position: absolute;
  top: 24px;
  right: 24px;

  cursor: pointer;

  &::before,
  &::after {
    content: '';

    position: absolute;

    height: 2px;
    width: 80%;

    background-color: var(--primary);
  }

  &::before {
    transform: rotateZ(45deg);
  }

  &::after {
    transform: rotateZ(-45deg);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  margin: 12px 0;

  background-color: var(--borders);
`;

export const NavMobileMenu = styled.ul`
  margin-top: 16px;
`;

export const NavMobileMenuItem = styled.li`
  width: 100%;
`;

export const NavMobileMenuItemLink = styled(Link)`
  display: block;
  padding: 12px 16px;

  font-size: 0.95rem;
  font-weight: 400;

  color: var(--base-text);

  cursor: pointer;

  border-radius: 8px;

  margin-bottom: 4px;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

/**
 * [old] Modal warn login disabled
 */
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

  font-size: 0.9rem;
  font-weight: 400;

  text-align: center;

  margin: 0 auto;
  margin-top: 16px;

  padding-bottom: 24px;
`;
