"use client";

import { NavbarItem } from "@nextui-org/navbar";
import { cn } from "@nextui-org/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  href: string;
  label: string;
}
function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <NavbarItem
      as={Link}
      href={href}
      className={cn(
        `text-neutral-900`,
        pathname === `/${label.toLowerCase()}`
          ? `underline underline-offset-4`
          : ""
      )}
    >
      {label}
    </NavbarItem>
  );
}

export default NavLink;
