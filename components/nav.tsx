"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      animate={{
        width: scrolled ? "100%" : "auto",
        paddingLeft: scrolled ? "2rem" : "2.2rem",
        paddingRight: scrolled ? "2rem" : "2.2rem",
        borderRadius: scrolled ? "0px" : "40px",
        top: scrolled ? 0 : 24,
        left: scrolled ? 0 : "50%",
        translateX: scrolled ? 0 : "-50%",
        backgroundColor: scrolled
          ? "rgba(15,15,18,0.8)"
          : "rgba(15,15,18,0.6)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        fixed z-50 backdrop-blur-2xl 
        border border-white/10 
        flex items-center justify-center gap-10 py-3 
        shadow-[0_0_25px_rgba(0,0,0,0.4)]
      "
    >
      <NavItem>Home</NavItem>
      <NavItem>Features</NavItem>
      <NavItem>Demo</NavItem>
      <NavItem>Contact</NavItem>
    </motion.nav>
  );
}

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="
      text-[15px] text-zinc-300 hover:text-white 
      transition-colors cursor-pointer
    ">
      {children}
    </span>
  );
}