"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#repertoire", label: "Repertoire" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#videos", label: "Videos" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-marsala/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo-dark.jpg"
            alt="Ana & Matt Duo"
            width={48}
            height={48}
            className={`rounded-full transition-all duration-500 ${
              scrolled ? "w-10 h-10" : "w-12 h-12"
            }`}
          />
          <span
            className={`font-serif text-xl font-bold transition-colors duration-500 ${
              scrolled ? "text-cream" : "text-marsala"
            }`}
          >
            Ana & Matt
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-cream/80" : "text-marsala/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
              scrolled
                ? "bg-gold text-marsala-dark hover:bg-gold-light"
                : "bg-marsala text-cream hover:bg-marsala-light"
            }`}
          >
            Book Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-2 bg-cream"
                : scrolled
                ? "bg-cream"
                : "bg-marsala"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                ? "bg-cream"
                : "bg-marsala"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-2 bg-cream"
                : scrolled
                ? "bg-cream"
                : "bg-marsala"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-marsala/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/80 text-lg font-medium tracking-wide hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-2.5 bg-gold text-marsala-dark rounded-full font-semibold tracking-wide"
              >
                Book Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
