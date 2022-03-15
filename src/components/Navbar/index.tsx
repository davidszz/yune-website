import Image from "next/image";
import Link from "next/link";
import { MdLogin, MdLogout } from 'react-icons/md';
// import { VscWorkspaceUntrusted } from 'react-icons/vsc';
import { useCallback, useEffect, useRef, useState, MouseEvent } from "react";
import { Link as ScrollLink } from 'react-scroll';

import { useScrollBlock } from "@hooks/useScrollBlock";
import { useAuth } from "@hooks/useAuth";
import { Util } from "@utils/Util";
import { 
  NavbarWrapper, 
  NavbarContent, 
  Nav, 
  Menu, 
  Logo, 
  MenuLink, 
  Access, 
  MobileMenuIcon, 
  LogoLink,
  LoginBtn,
  NavMobile,
  NavMobileOverlay,
  NavMobileCloseMenuBtn,
  NavMobileMenu,
  NavMobileMenuItem,
  NavMobileMenuItemLink,
  Divider,
  // ModalWarnIcon, 
  // ModalWarnTitle, 
  // ModalWarnDescription
} from "./styles";

export function Navbar() {
  const navMobileOverlayRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const scrollBlock = useScrollBlock();

  useEffect(() => {
    if (open) {
      scrollBlock.blockScroll();
    } else {
      scrollBlock.allowScroll();
    }
  }, [open, scrollBlock]);

  function handleMobileBtnClick() {
    setOpen(state => !state);
  }

  const handleMobileOverlayClick = useCallback((e: MouseEvent) => {
    if (navMobileOverlayRef.current === e.target) {
      setOpen(false);
    }
  }, []);

  return (
    <NavbarWrapper open={open}>
      <NavbarContent>
        <Link href="/" passHref>
          <LogoLink>
            <Logo src="/yune.png" width="120px" height="30px" />
          </LogoLink>
        </Link>
        <Nav>
          <Menu>
            <MenuLink>
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuLink>
            <MenuLink>
              <ScrollLink to="features" smooth>
                Recursos
              </ScrollLink>
            </MenuLink>
            <MenuLink>
              <ScrollLink to="services" smooth>
                Por que nós?
              </ScrollLink>
            </MenuLink>
            <MenuLink>
              <ScrollLink to="team" smooth>
                Equipe
              </ScrollLink>
            </MenuLink>
          </Menu>
        </Nav>

        <NavMobileOverlay ref={navMobileOverlayRef} open={open} onClick={e => handleMobileOverlayClick(e)}>
          <NavMobile>
            <NavMobileCloseMenuBtn onClick={handleMobileBtnClick} />

            <Link href="/" passHref>
              <LogoLink>
                <Logo src="/yune.png" width="120px" height="30px" />
              </LogoLink>
            </Link>

            <Divider />

            <NavMobileMenu>
              <NavMobileMenuItem>
                <NavMobileMenuItemLink to="main" smooth>
                  Inicio
                </NavMobileMenuItemLink>
              </NavMobileMenuItem>
              <NavMobileMenuItem>
                <NavMobileMenuItemLink to="features" smooth>
                  Recursos
                </NavMobileMenuItemLink>
              </NavMobileMenuItem>
              <NavMobileMenuItem>
                <NavMobileMenuItemLink to="services" smooth>
                  Por que nós?
                </NavMobileMenuItemLink>
              </NavMobileMenuItem>
              <NavMobileMenuItem>
                <NavMobileMenuItemLink to="team" smooth>
                  Nossa equipe
                </NavMobileMenuItemLink>
              </NavMobileMenuItem>
            </NavMobileMenu>
          </NavMobile>
        </NavMobileOverlay>
        <Access>
          {user ? (<></>) : (
            <LoginBtn 
              onClick={() => window.location.href = '/login'}
            >
              <MdLogin size="16px"/>
              <span>Login</span>
            </LoginBtn>
          )}
        </Access>

        <MobileMenuIcon onClick={handleMobileBtnClick}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="20" width="24" height="2" fill="var(--primary)" />
            <rect x="20" y="26" width="16" height="2" fill="var(--primary)" />
          </svg>
        </MobileMenuIcon>
      </NavbarContent>

      {/* <Modal 
        open={modalOpen}
        width={500}
        handleClose={() => setModalOpen(false)}
      >
        <ModalWarnIcon>
          <VscWorkspaceUntrusted size="88px"/>
        </ModalWarnIcon>
        <ModalWarnTitle>
          Login temporáriamente desativado!
        </ModalWarnTitle>
        <ModalWarnDescription>
          O sistema de login foi desativado temporariamente para a criação do painel de controle do site.
          Não há previsão de quando a volta acontecerá, mas você pode ficar por dentro de tudo que
          está acontecendo entrando em nosso <a href="/discord" target="_blank">servidor de suporte</a>.
        </ModalWarnDescription>
      </Modal> */}
    </NavbarWrapper>
  );
}