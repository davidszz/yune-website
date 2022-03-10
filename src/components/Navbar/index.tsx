import Link from "next/link";
import { MdLogin } from 'react-icons/md';
import { VscWorkspaceUntrusted } from 'react-icons/vsc';
import { useEffect, useState } from "react";

import { Button } from "@components/Button";
import { useScrollBlock } from "@hooks/useScrollBlock";
import { Modal } from "@components/Modal";
import { NavbarWrapper, NavbarContent, Nav, Menu, Logo, MenuLink, Access, MobileMenuIcon, ModalWarnIcon, ModalWarnTitle, ModalWarnDescription } from "./styles";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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

  return (
    <NavbarWrapper>
      <NavbarContent>
        <Link href="/">
          <a>
            <Logo src="/yune.png" width="120px" height="30px" />
          </a>
        </Link>
        <Nav open={open}>
          <Menu>
            <MenuLink>
              <a>Home</a>
            </MenuLink>
            <MenuLink>
              <a>Planos</a>
            </MenuLink>
            <MenuLink>
              <a>Equipe</a>
            </MenuLink>
            <MenuLink>
              <a>Serviços</a>
            </MenuLink>
          </Menu>
        </Nav>
        <Access>
          <Button 
            uppercase 
            transparent 
            icon={MdLogin} 
            iconColor="var(--primary)"
            onClick={() => setModalOpen(true)}
          >
            Login
          </Button>
        </Access>

        <MobileMenuIcon onClick={handleMobileBtnClick}>
          {open ? (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="16.9399" y="15.5309" width="22" height="2" fill="var(--primary)" transform="rotate(45 16.9399 15.5309)" />
              <rect x="15.5257" y="31.0872" width="22" height="2" fill="var(--primary)" transform="rotate(-45 15.5257 31.0872)" />
            </svg>
          ) : (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="20" width="24" height="2" fill="var(--primary)" />
              <rect x="20" y="26" width="16" height="2" fill="var(--primary)" />
            </svg>
          )}
        </MobileMenuIcon>
      </NavbarContent>

      <Modal 
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
      </Modal>
    </NavbarWrapper>
  );
}