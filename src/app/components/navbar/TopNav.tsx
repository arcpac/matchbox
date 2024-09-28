import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { TbMatchstick } from "react-icons/tb";
import NavLink from "./NavLink";

export default function TopNav() {
  return (
    <Navbar
      shouldHideOnScroll
      className="bg-gradient-to-r from-neutral-100 to-white"
      isBordered
    >
      <NavbarBrand>
        <TbMatchstick size={35} />
        <p className="font-bold text-inherit">MatchBox</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLink href="/home" label="Home" />
        <NavLink href="/members" label="Members" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
