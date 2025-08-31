"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavPill,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Chase", link: "/chase" },
  { name: "PhantomWallet", link: "/phantom-wallet" },
  { name: "Cashapp", link: "/cashapp" },
];

export default function NavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-[100] w-full lg:pt-4 xl:pt-6">
      <Navbar className="relative z-[1]">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center">
            {/* Sign In button using NavPill component */}
            <Link href="/auth/sign-in">
              <div className="items-center cursor-pointer justify-center flex">
                <NavPill isActive={true} variant="primary" className="w-28">
                  Sign In
                </NavPill>
              </div>
            </Link>
          </div>
        </NavBody>
        
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="block w-full px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 w-full">
              {/* Sign In button using NavPill component */}
              <Link href="/auth/sign-in" className="w-full">
                <div className="items-center cursor-pointer justify-center flex">
                  <NavPill isActive={true} variant="primary" className="w-28">
                    Sign In
                  </NavPill>
                </div>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}
