import Link from "next/link";
import { NavbarWrapper, NavbarContent, Menu, Logo } from "./styles";

export function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <Link href="/" passHref>
          <Logo src="/logo.svg" width="56px" height="56px" />
        </Link>
        <Menu></Menu>
      </NavbarContent>
    </NavbarWrapper>
  )
}