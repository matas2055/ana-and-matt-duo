"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  { year: "2001", title: "Early Musical Foundations", desc: "Matt began his musical journey with piano recitals in São Joaquim, Santa Catarina.", who: "Matt" },
  { year: "2016", title: "Solo Acoustic Performances", desc: "Matt started performing live as a solo acoustic artist across venues in Santa Catarina.", who: "Matt" },
  { year: "2019", title: "The Duo is Born", desc: "Ana joined Matt on cajón, forming Rock L'amour. Their chemistry was immediate — the perfect combination of rhythm and melody.", who: "Both", highlight: true },
  { year: "2023", title: "SC Custom Show", desc: "Matt served as main vocalist for a Country Band at the most important Custom Culture event in Balneário Camboriú.", who: "Matt" },
  { year: "2024", title: "Rock'N Blues Trio", desc: "Ana expanded her experience performing with the Rock'N Blues Trio, honing her percussion skills.", who: "Ana" },
  { year: "2025", title: "Brusque Song Festival", desc: "Matt achieved 3rd place as a vocalist competing in various styles.", who: "Matt" },
  { year: "2026", title: "Going International", desc: "Transitioning to Ana & Matt Duo — ready to bring their unique sound to stages around the world.", who: "Both", highlight: true },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-marsala/3 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold text-sm uppercase tracking-[0.3em] font-medium"
          >
            Our Path
          </motion.span>
          <div className="overflow-hidden mt-3">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl text-marsala"
            >
              Our Journey
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-6 origin-center"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-marsala/40 via-gold/40 to-marsala/40 origin-top md:-translate-x-px"
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                className={`absolute left-6 md:left-1/2 -translate-x-1/2 mt-1.5 z-10 ${
                  item.highlight
                    ? "w-5 h-5 rounded-full bg-gold shadow-[0_0_20px_rgba(201,169,110,0.5)]"
                    : "w-3 h-3 rounded-full bg-marsala ring-4 ring-cream"
                }`}
              />

              {/* Card */}
              <div className={`ml-14 sm:ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div
                  className={`p-4 sm:p-6 rounded-xl transition-all duration-500 hover:shadow-lg ${
                    item.highlight
                      ? "bg-marsala text-cream hover:shadow-marsala/20"
                      : "bg-white border border-marsala/5 hover:border-gold/20 hover:shadow-gold/5"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold tracking-widest uppercase ${item.highlight ? "text-gold" : "text-gold"}`}>
                      {item.year}
                    </span>
                    {item.who !== "Both" && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        item.highlight ? "bg-cream/10 text-cream/60" : "bg-marsala/5 text-marsala/60"
                      }`}>
                        {item.who}
                      </span>
                    )}
                  </div>
                  <h3 className={`font-serif text-lg sm:text-xl font-bold mb-2 ${item.highlight ? "text-cream" : "text-marsala"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${item.highlight ? "text-cream/70" : "text-charcoal/50"}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {/* Languages */}
          <div className="bg-white rounded-xl p-8 border border-marsala/5 hover:border-gold/20 transition-colors duration-300">
            <h3 className="font-serif text-xl text-marsala mb-5">Languages</h3>
            {[
              { lang: "English", level: "Advanced (Matt)" },
              { lang: "Portuguese", level: "Native" },
              { lang: "Spanish", level: "Conversational" },
            ].map((l) => (
              <div key={l.lang} className="flex justify-between items-center py-2 border-b border-marsala/5 last:border-0">
                <span className="text-charcoal/70 text-sm">{l.lang}</span>
                <span className="text-xs text-gold bg-gold/10 px-2.5 py-1 rounded-full">{l.level}</span>
              </div>
            ))}
          </div>

          {/* Singing Languages */}
          <div className="bg-white rounded-xl p-8 border border-marsala/5 hover:border-gold/20 transition-colors duration-300">
            <h3 className="font-serif text-xl text-marsala mb-5">We Sing In</h3>
            <div className="flex flex-col gap-3">
              {["English", "Portuguese", "Spanish"].map((l) => (
                <div key={l} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-charcoal/70 text-sm">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div className="bg-white rounded-xl p-8 border border-marsala/5 hover:border-gold/20 transition-colors duration-300">
            <h3 className="font-serif text-xl text-marsala mb-5">Top Styles</h3>
            <div className="flex flex-wrap gap-2">
              {["Country", "Rockabilly", "Classic Rock", "Blues", "Ballads", "Folk", "Pop"].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-cream text-marsala text-xs font-medium rounded-full border border-marsala/5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
