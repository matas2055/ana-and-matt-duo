"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/hero-walking.jpg", caption: "On the road", aspect: "col-span-2 row-span-2" },
  { src: "/images/about-portrait.jpg", caption: "The duo", aspect: "col-span-1 row-span-2" },
  { src: "/images/gallery-live.jpg", caption: "Live performance", aspect: "col-span-1 row-span-1" },
  { src: "/images/about-playing.jpg", caption: "Acoustic session", aspect: "col-span-1 row-span-1" },
  { src: "/images/gallery-stage.jpg", caption: "On stage", aspect: "col-span-1 row-span-2" },
];

function ParallaxImage({ src, caption, className }: { src: string; caption: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className={`relative overflow-hidden rounded-xl group cursor-pointer ${className}`}
    >
      <motion.div style={{ y }} className="absolute inset-[-15%]">
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-marsala-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-cream font-serif text-xl">{caption}</p>
      </div>

      {/* Corner accents on hover */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500 z-20" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500 z-20" />
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="gallery" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold text-sm uppercase tracking-[0.3em] font-medium"
          >
            Behind the Scenes
          </motion.span>
          <div className="overflow-hidden mt-3">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-5xl md:text-7xl text-marsala"
            >
              Gallery
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-6 origin-center"
          />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4">
          {photos.map((photo) => (
            <ParallaxImage
              key={photo.src}
              src={photo.src}
              caption={photo.caption}
              className={photo.aspect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
