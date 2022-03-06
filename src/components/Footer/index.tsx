import Link from "next/link";

import { 
  Wrapper,
  Container,
  MainContent,
  MainContentText,
  MainContentImage,
  SpaceDiv,
  FooterMenu,
  FooterMenuTitle,
  FooterMenuLink,
} from "./styles";

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <MainContent>
          <Link href="/">
            <a>
              <MainContentImage src="/yune.png" alt="Yune Logo" />
            </a>
          </Link>

          <MainContentText>
            Yune Store 2021<br/>
            Todos os direitos reservados
          </MainContentText>
        </MainContent>
        <SpaceDiv />
        <FooterMenu>
          <FooterMenuTitle>
            Sobre
          </FooterMenuTitle>
          <FooterMenuLink>
            <Link href="https://discord.com/xDwQKtqNaV">
              <a target="_blank">
                Suporte  
              </a>
            </Link>
          </FooterMenuLink>
          <FooterMenuLink>
            <Link href="https://instagram.com/david.kns">
              <a target="_blank">
                Instagram
              </a>
            </Link>
          </FooterMenuLink>
          <FooterMenuLink>
            <Link href="https://github.com/sasuke-7">
              <a target="_blank">
                GitHub
              </a>
            </Link>
          </FooterMenuLink>
        </FooterMenu>
        <FooterMenu>
          <FooterMenuTitle>
            Links do Sayan
          </FooterMenuTitle>
          <FooterMenuLink>
            <Link href="https://discord.gg/QrW5qXzWAY">
              <a target="_blank">
                Yummy
              </a>
            </Link>
          </FooterMenuLink>
          <FooterMenuLink>
            <Link href="https://instagram.com/bernardo.murta07">
              <a target="_blank">
                Instagram
              </a>
            </Link>
          </FooterMenuLink>
        </FooterMenu>
      </Container>
    </Wrapper>
  )
}