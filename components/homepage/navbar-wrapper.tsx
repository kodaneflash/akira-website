"use client";

import { useState } from "react";
// import { useSession, signOut } from "next-auth/react";

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
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
// import AnnouncementBar from "@/components/announcement-bar";

const navItems = [ki
  { name: "Home", link: "/" },
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "/pricing" },
];

export default function NavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  // const { data: session, status } = useSession();
  const session = null; // Temporarily disabled auth
  const status: "loading" | "authenticated" | "unauthenticated" = "unauthenticated"; // Temporarily disabled auth

  const handleLogout = async () => {
    // await signOut({ callbackUrl: "/" });
    console.log('Logout temporarily disabled');
  };
  
  // Check if user has invalid session (no Whop account linked)
  // const hasInvalidSession = session?.user && !(session.user as { whopUserId?: string }).whopUserId;
  const hasInvalidSession = false; // Temporarily disabled auth

  return (
    <header className="relative z-[100] w-full">
      {/* <AnnouncementBar /> */}
      <Navbar className="relative z-[1]">
        <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center space-x-2">
          {status === "loading" ? (
            <div className="w-20 h-9 bg-muted animate-pulse rounded-md" />
          ) : hasInvalidSession ? (
            // User has session but no Whop account linked - force re-auth
            <>
              <p className="text-sm text-muted-foreground mr-2">Please sign in again</p>
              <Button
                onClick={async () => {
                  // await signOut({ redirect: false });
                  // window.location.href = "/sign-in?callbackUrl=/dashboard";
                  console.log('Sign out temporarily disabled');
                }}
                variant="default"
                size="sm"
              >
                Sign In with Whop
              </Button>
            </>
          ) : session ? (
            <>
              <NavbarButton href="/dashboard" variant="secondary">
                Dashboard
              </NavbarButton>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* Get Started button with hero section styling */}
              <Link href="/sign-up">
                <div className="flex h-full items-center justify-center transition">
                  <button className="relative cursor-pointer rounded-full bg-[rgba(255,255,255,0.1)] px-6 py-1.5 text-white backdrop-blur-[226px]">
                    <span className="bg-gradient-to-b from-[#717171] to-[#71717100] bg-clip-text text-transparent">Get Started</span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-b from-[#00000080] to-[#d6d6d600] p-[0.5px]">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-[#090909]">Get Started</span>
                    </span>
                  </button>
                </div>
              </Link>
              {/* View Pricing button with no background like hero section */}
              <Link 
                href="/pricing"
                className="flex items-center gap-2 text-sm font-semibold text-neutral-400"
              >
                View Pricing 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </>
          )}
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
          {status === "loading" ? (
              <div className="w-full h-10 bg-muted animate-pulse rounded-md" />
            ) : hasInvalidSession ? (
              // User has session but no Whop account linked - force re-auth
              <>
                <p className="text-sm text-muted-foreground text-center mb-2">Please sign in again</p>
                <Button
                  onClick={async () => {
                    setIsOpen(false);
                    // await signOut({ redirect: false });
                    // window.location.href = "/sign-in?callbackUrl=/dashboard";
                    console.log('Sign out temporarily disabled');
                  }}
                  variant="default"
                  className="w-full"
                >
                  Sign In with Whop
                </Button>
              </>
            ) : session ? (
              <>
                <NavbarButton href="/dashboard" variant="secondary" className="w-full">
                  Dashboard
                </NavbarButton>
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                {/* Get Started button with hero section styling */}
                <Link href="/sign-up" className="w-full">
                  <div className="flex h-full items-center justify-center transition">
                    <button className="relative cursor-pointer rounded-full bg-[rgba(255,255,255,0.1)] px-6 py-1.5 text-white backdrop-blur-[226px] w-full">
                      <span className="bg-gradient-to-b from-[#717171] to-[#71717100] bg-clip-text text-transparent">Get Started</span>
                      <span className="absolute inset-0 rounded-full bg-gradient-to-b from-[#00000080] to-[#d6d6d600] p-[0.5px]">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#090909]">Get Started</span>
                      </span>
                    </button>
                  </div>
                </Link>
                {/* View Pricing button with no background like hero section */}
                <Link 
                  href="/pricing"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-neutral-400 w-full py-2"
                >
                  View Pricing 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </>
            )}
          </div>
        </MobileNavMenu>
      </MobileNav>
      </Navbar>
    </header>
  );
}
