"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-marsala-dark py-12 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo-dark.jpg"
              alt="Ana & Matt Duo"
              width={44}
              height={44}
              className="rounded-full ring-2 ring-gold/20"
            />
            <span className="font-serif text-cream text-lg">
              Ana & Matt <span className="text-gold/60 text-sm">Duo</span>
            </span>
          </motion.div>

          <div className="flex gap-8 text-cream/30 text-sm">
            {["About", "Repertoire", "Experience", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-gold transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-cream/20 text-sm">
            &copy; {new Date().getFullYear()} Ana & Matt Duo
          </p>
        </div>
      </div>
    </footer>
  );
}
