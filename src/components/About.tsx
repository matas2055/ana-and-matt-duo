"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full bg-marsala/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm uppercase tracking-[0.3em] font-medium"
          >
            Who We Are
          </motion.span>
          <div className="overflow-hidden mt-3">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl text-marsala"
            >
              About Us
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-6 origin-left"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          {/* Image with parallax and reveal */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            animate={
              isInView
                ? { opacity: 1, clipPath: "inset(0% 0 0 0)" }
                : {}
            }
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden">
              <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Matt and Ana portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-marsala text-cream p-4 sm:p-6 rounded-xl shadow-2xl glow-gold max-w-[160px] sm:max-w-[200px]"
            >
              <p className="font-serif text-3xl font-bold text-gold">7+</p>
              <p className="text-cream/70 text-sm mt-1">
                Years performing together as a duo
              </p>
            </motion.div>

            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl"
            />
          </motion.div>

          {/* Bio text with stagger */}
          <div className="space-y-8">
            {[
              {
                text: (
                  <>
                    <span className="font-serif text-2xl sm:text-3xl text-marsala font-bold leading-tight block mb-4">
                      A dynamic husband-and-wife duo with a passion for music.
                    </span>
                    Based in Santa Catarina, Brazil, Matt & Ana bring the perfect
                    combination of rhythm and melody to every stage — from intimate
                    bars to grand event halls.
                  </>
                ),
                delay: 0.4,
              },
              {
                text: (
                  <>
                    <strong className="text-marsala">Matt</strong> brings over 25
                    years of musical experience, delivering powerful lead vocals
                    and acoustic guitar. His journey started with piano at age 5,
                    evolving into a versatile performer who sings in English,
                    Portuguese, and Spanish.
                  </>
                ),
                delay: 0.6,
              },
              {
                text: (
                  <>
                    <strong className="text-marsala">Ana</strong> perfectly
                    complements the sound with her precise and captivating
                    Peruvian caj&oacute;n percussion, backing vocals, and
                    harmonica. Together since 2019, their chemistry on stage
                    creates an unforgettable experience.
                  </>
                ),
                delay: 0.8,
              },
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: item.delay,
                  ease: "easeOut",
                }}
                className="text-charcoal/70 text-lg leading-relaxed"
              >
                {item.text}
              </motion.p>
            ))}

            {/* Skill pills with stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                "Lead Vocals",
                "Acoustic Guitar",
                "Peruvian Cajón",
                "Harmonica",
                "Backing Vocals",
                "Piano",
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.1 + i * 0.08 }}
                  className="px-5 py-2 bg-cream text-marsala text-sm font-medium rounded-full border border-marsala/10 hover:bg-marsala hover:text-cream transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second image section - playing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 sm:mt-24 md:mt-32 relative"
        >
          <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/images/about-playing.jpg"
              alt="Matt playing guitar with Ana"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-marsala/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
              <p className="text-cream/60 text-xs sm:text-sm uppercase tracking-[0.2em] mb-1 sm:mb-2">
                The Sound
              </p>
              <p className="text-cream font-serif text-lg sm:text-2xl md:text-4xl max-w-2xl leading-tight">
                &ldquo;The perfect combination of rhythm and melody&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-12 sm:mt-24 grid md:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              quote: "Mateus is a great performer and always engages with the audience.",
              author: "Valdemir Junior",
              role: "Owner, Schornstein Bar",
            },
            {
              quote: "Ana's playing complements the sound — without the Cajón, the songs tend to be a little bit sad.",
              author: "Ana Peixe",
              role: "Owner, Porks Itajaí",
            },
            {
              quote: "Mateus has a great repertoire, that actually makes clients enjoy the music.",
              author: "Caio Fontenelle",
              role: "Owner, Pepper Jack Restaurant",
            },
            {
              quote: "Ana is very professional, always good looking and makes the songs become very interesting.",
              author: "Ricardo Casas",
              role: "Owner, Deep Four Black",
            },
          ].map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
              className="group relative bg-cream p-5 sm:p-8 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-500"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-gold/30 transition-colors duration-500" />
              <div className="text-gold text-5xl font-serif leading-none mb-4 opacity-30">
                &ldquo;
              </div>
              <p className="text-charcoal/70 italic leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-marsala/10 flex items-center justify-center">
                  <span className="text-marsala font-bold text-sm">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-marsala text-sm">
                    {t.author}
                  </p>
                  <p className="text-warm-gray text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
