"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/rocklamour",
    handle: "@rocklamour",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@RockLamour",
    handle: "@RockLamour",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@rock.lamour",
    handle: "@rock.lamour",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-marsala" />
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <Image
            src="/images/gallery-stage.jpg"
            alt="On stage"
            fill
            className="object-cover opacity-20"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-marsala via-marsala/80 to-marsala/60" />
        </div>
      </div>

      <div className="noise-bg absolute inset-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium"
          >
            Let&apos;s Connect
          </motion.span>
          <div className="overflow-hidden mt-3">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-5xl md:text-7xl text-cream"
            >
              Book Us
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-cream/40 mt-4 max-w-xl mx-auto"
          >
            Available for cruise ships, private events, restaurants, bars, and
            special occasions worldwide.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-6 origin-center"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <h3 className="font-serif text-3xl text-cream mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-cream/50 leading-relaxed">
                Whether you&apos;re looking for live entertainment for your cruise
                ship, restaurant, bar, wedding, or corporate event — we deliver a
                polished, engaging, and unforgettable musical experience.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  label: "Email",
                  value: "contact@anaandmattduo.com",
                  href: "mailto:contact@anaandmattduo.com",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  ),
                  label: "Based in",
                  value: "Santa Catarina, Brazil",
                  sub: "Available worldwide",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream/30 text-xs uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gold hover:text-gold-light transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-cream font-medium">{item.value}</p>
                    )}
                    {item.sub && <p className="text-cream/30 text-sm">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-cream/30 text-xs uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5 hover:border-gold/30 hover:bg-gold/10 transition-all duration-300"
                  >
                    <span className="text-cream/50 group-hover:text-gold transition-colors">{s.icon}</span>
                    <span className="text-cream/50 text-sm group-hover:text-cream transition-colors hidden sm:inline">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const subject = encodeURIComponent("Booking Inquiry - Ana & Matt Duo");
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nEvent: ${data.get("event")}\n\n${data.get("message")}`
                );
                window.location.href = `mailto:contact@anaandmattduo.com?subject=${subject}&body=${body}`;
              }}
            >
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Your Email" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-all duration-300"
                  />
                  {focused === field.name && (
                    <motion.div
                      layoutId="focusRing"
                      className="absolute inset-0 rounded-xl border border-gold/40 pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </div>
              ))}

              <select
                name="event"
                className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-cream/50 focus:outline-none focus:border-gold/50 transition-all duration-300"
              >
                <option value="" className="text-charcoal">Event Type</option>
                <option value="cruise" className="text-charcoal">Cruise Ship</option>
                <option value="restaurant" className="text-charcoal">Restaurant / Bar</option>
                <option value="wedding" className="text-charcoal">Wedding</option>
                <option value="corporate" className="text-charcoal">Corporate Event</option>
                <option value="private" className="text-charcoal">Private Party</option>
                <option value="other" className="text-charcoal">Other</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your event..."
                rows={4}
                required
                className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-all duration-300 resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gold text-marsala-dark rounded-xl font-bold text-lg tracking-wide hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] transition-all duration-500"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
