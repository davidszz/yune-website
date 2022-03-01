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

export const Logo = styled(Image)``;

export const Menu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;