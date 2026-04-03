"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function FloatingNotes() {
  const notes = ["♪", "♫", "♬", "♩", "♭", "♮"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {notes.map((note, i) => (
        <motion.span
          key={i}
          className="absolute text-5xl"
          style={{ color: "rgba(245, 240, 232, 0.06)" }}
          initial={{ x: `${10 + i * 15}%`, y: "110%", rotate: 0 }}
          animate={{
            y: "-10%",
            rotate: [0, 30, -20, 10, 0],
            x: `${10 + i * 15 + Math.sin(i * 2) * 8}%`,
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 1.8,
            ease: "linear",
          }}
        >
          {note}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] md:h-[120vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/images/hero-walking.jpg"
          alt="Ana & Matt walking with instruments"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-marsala-dark/90" />
      </motion.div>

      <FloatingNotes />
      <div className="absolute inset-0 noise-bg" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* ===== LOGO — transparent PNG ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, filter: "blur(25px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative mx-auto mb-4 sm:mb-6 w-[90vw] max-w-[700px] sm:w-[80vw] md:w-[65vw]"
        >
          {/* Glow behind logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="absolute inset-0 -m-12"
            style={{
              background: "radial-gradient(ellipse at center, rgba(201, 169, 110, 0.15) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          <Image
            src="/images/logo-hero.png"
            alt="Ana & Matt Duo"
            width={1024}
            height={1024}
            className="w-full h-auto relative drop-shadow-[0_0_40px_rgba(201,169,110,0.15)]"
            priority
          />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-32 h-px mx-auto my-8"
          style={{ background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }}
        />

        {/* Subtitle */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ color: "rgba(245, 240, 232, 0.45)" }}
            className="text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            A husband-and-wife acoustic duo from Brazil, delivering unforgettable
            live performances with guitar, vocals &amp; Peruvian caj&oacute;n
          </motion.p>
        </div>

        {/* Genre marquee */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-6 mb-8 sm:mt-8 sm:mb-12 max-w-2xl mx-auto overflow-hidden rounded-full py-2.5 sm:py-3"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="marquee">
            <div className="marquee-content gap-8 px-4">
              {[
                "Country", "Rockabilly", "Classic Rock", "Blues", "Folk",
                "Ballads", "50s–90s Hits", "Reggae", "Surf Music", "Pop",
                "Country", "Rockabilly", "Classic Rock", "Blues", "Folk",
                "Ballads", "50s–90s Hits", "Reggae", "Surf Music", "Pop",
              ].map((genre, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap flex items-center gap-2"
                  style={{
                    color: "rgba(245, 240, 232, 0.35)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "rgba(201, 169, 110, 0.5)" }}
                  />
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <a
            href="#contact"
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold tracking-wide text-base sm:text-lg overflow-hidden transition-all duration-500"
            style={{ background: "#C9A96E", color: "#3D1112" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(201, 169, 110, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book Us
          </a>
          <a
            href="#repertoire"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold tracking-wide text-base sm:text-lg transition-all duration-500"
            style={{
              border: "1px solid rgba(245, 240, 232, 0.2)",
              color: "rgba(245, 240, 232, 0.8)",
              backdropFilter: "blur(8px)",
            }}
          >
            218+ Songs
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { target: 218, suffix: "+", label: "Songs" },
            { target: 25, suffix: "+", label: "Years of Music" },
            { target: 7, suffix: "+", label: "Years as Duo" },
            { target: 3, suffix: "", label: "Languages" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold"
                style={{ color: "#C9A96E" }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  color: "rgba(245, 240, 232, 0.25)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span
            style={{
              color: "rgba(245, 240, 232, 0.2)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, rgba(245, 240, 232, 0.3), transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
