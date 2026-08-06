"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl"
    >
      <Container>

        <div className="flex items-center justify-between h-24">

          <NavLogo />

          <NavLinks />

          <div className="hidden lg:flex items-center gap-4">

            <ThemeToggle />

            <ResumeButton />

          </div>

          <MobileMenu />

        </div>

      </Container>
    </motion.nav>
  );
}