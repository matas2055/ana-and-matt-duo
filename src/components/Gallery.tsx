"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/hero-walking.jpg", caption: "On the road", aspect: "col-span-1 sm:col-span-2 sm:row-span-2" },
  { src: "/images/about-portrait.jpg", caption: "The duo", aspect: "col-span-1 sm:row-span-2" },
  { src: "/images/gallery-live.jpg", caption: "Live performance", aspect: "col-span-1" },
  { src: "/images/about-playing.jpg", caption: "Acoustic session", aspect: "col-span-1" },
  { src: "/images/gallery-stage.jpg", caption: "On stage", aspect: "col-span-1 sm:row-span-2" },
];

function ParallaxImage({
  src,
  caption,
  className,
  onClick,
}: {
  src: string;
  caption: string;
  className?: string;
  onClick: () => void;
}) {
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
      onClick={onClick}
    >
      <motion.div style={{ y }} className="absolute inset-[-15%]">
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </motion.div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-marsala-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-cream font-serif text-lg sm:text-xl">{caption}</p>
      </div>

      {/* Corner accents on hover */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500 z-20" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500 z-20" />
    </motion.div>
  );
}

function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  photos: { src: string; caption: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Close lightbox"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative z-[105] w-[92vw] h-[75vh] sm:w-[85vw] sm:h-[80vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          className="object-contain"
          sizes="92vw"
          priority
        />
      </motion.div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute bottom-6 sm:bottom-10 left-0 right-0 text-center z-[110] px-4"
      >
        <p className="text-cream/80 font-serif text-lg sm:text-xl">{photo.caption}</p>
        <p className="text-cream/40 text-sm mt-1">
          {currentIndex + 1} / {photos.length}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, []);

  return (
    <>
      <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20">
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
                className="font-serif text-4xl sm:text-5xl md:text-7xl text-marsala"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] sm:auto-rows-[250px] md:auto-rows-[300px] gap-3 sm:gap-4">
            {photos.map((photo, index) => (
              <ParallaxImage
                key={photo.src}
                src={photo.src}
                caption={photo.caption}
                className={photo.aspect}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
