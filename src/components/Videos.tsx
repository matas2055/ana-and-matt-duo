"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Videos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="videos" className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-marsala/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold text-sm uppercase tracking-[0.3em] font-medium"
          >
            Live Performances
          </motion.span>
          <div className="overflow-hidden mt-3">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-5xl md:text-7xl text-marsala"
            >
              Watch Us Play
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-6 origin-center"
          />
        </div>

        {/* YouTube Videos */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { id: "M_T6XRcN5nM", si: "m4XnpKeo958zG1lM", title: "Live Performance" },
            { id: "3ySx_pAvIb8", si: "Jhkc6eh0VCS6e5qx", title: "Acoustic Session" },
          ].map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-marsala-dark shadow-lg hover:shadow-xl transition-shadow duration-500">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?si=${video.si}&controls=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h3 className="font-serif text-xl text-marsala mt-4">{video.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.youtube.com/@RockLamour"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-marsala text-cream rounded-full font-medium hover:bg-marsala-light transition-all duration-300 hover:shadow-lg hover:shadow-marsala/20"
          >
            <svg className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
