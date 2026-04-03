"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Category = {
  name: string;
  icon: string;
  songs: { title: string; artist: string }[];
};

const repertoire: Category[] = [
  {
    name: "Country",
    icon: "🤠",
    songs: [
      { title: "Tennessee Whiskey", artist: "Chris Stapleton" },
      { title: "You Should Probably Leave", artist: "Chris Stapleton" },
      { title: "Broken Halos", artist: "Chris Stapleton" },
      { title: "Starting Over", artist: "Chris Stapleton" },
      { title: "Joy of My Life", artist: "Chris Stapleton" },
      { title: "Cold", artist: "Chris Stapleton" },
      { title: "Millionaire", artist: "Chris Stapleton" },
      { title: "Parachute", artist: "Chris Stapleton" },
      { title: "Chattahoochee", artist: "Alan Jackson" },
      { title: "It's Five O'Clock Somewhere", artist: "Alan Jackson" },
      { title: "Don't Rock the Jukebox", artist: "Alan Jackson" },
      { title: "Gone Country", artist: "Alan Jackson" },
      { title: "Little Bitty", artist: "Alan Jackson" },
      { title: "Mercury Blues", artist: "Alan Jackson" },
      { title: "Freight Train", artist: "Alan Jackson" },
      { title: "Friends in Low Places", artist: "Garth Brooks" },
      { title: "Standing Outside the Fire", artist: "Garth Brooks" },
      { title: "Amarillo By Morning", artist: "George Strait" },
      { title: "The Fireman", artist: "George Strait" },
      { title: "Forever And Ever Amen", artist: "Randy Travis" },
      { title: "Jolene", artist: "Dolly Parton" },
      { title: "Achy Breaky Heart", artist: "Billy Ray Cyrus" },
      { title: "Take Me Home Country Roads", artist: "John Denver" },
      { title: "Wagon Wheel", artist: "Darius Rucker" },
      { title: "Chicken Fried", artist: "Zac Brown Band" },
      { title: "Dixieland Delight", artist: "Alabama" },
      { title: "Boot Scootin' Boogie", artist: "Brooks & Dunn" },
      { title: "Brand New Man", artist: "Brooks & Dunn" },
      { title: "Bad Luck", artist: "Zach Top" },
      { title: "Cold Beer and Country Music", artist: "Zach Top" },
      { title: "Mama's Don't Let Your Babies", artist: "Waylon Jennings" },
      { title: "Mama Tried", artist: "Merle Haggard" },
      { title: "Ramblin' Fever", artist: "Merle Haggard" },
      { title: "Guitars Cadillacs", artist: "Dwight Yoakam" },
      { title: "Fast As You", artist: "Dwight Yoakam" },
      { title: "Your Man", artist: "Josh Turner" },
      { title: "Big Iron", artist: "Marty Robbins" },
      { title: "Ring of Fire", artist: "Johnny Cash" },
    ],
  },
  {
    name: "Rockabilly & 50s-60s",
    icon: "🎸",
    songs: [
      { title: "Blue Suede Shoes", artist: "Elvis Presley" },
      { title: "Burning Love", artist: "Elvis Presley" },
      { title: "Suspicious Minds", artist: "Elvis Presley" },
      { title: "Hound Dog", artist: "Elvis Presley" },
      { title: "That's Alright", artist: "Elvis Presley" },
      { title: "Can't Help Falling in Love", artist: "Elvis Presley" },
      { title: "Blue Moon of Kentucky", artist: "Elvis Presley" },
      { title: "Johnny B. Goode", artist: "Chuck Berry" },
      { title: "Tutti Frutti", artist: "Little Richard" },
      { title: "Good Golly Miss Molly", artist: "Little Richard" },
      { title: "Great Balls of Fire", artist: "Jerry Lee Lewis" },
      { title: "Rock Around The Clock", artist: "Bill Haley" },
      { title: "Twenty Flight Rock", artist: "Paul McCartney" },
      { title: "Pretty Woman", artist: "Roy Orbison" },
      { title: "La Bamba", artist: "Los Lobos" },
      { title: "Twist and Shout", artist: "The Beatles" },
    ],
  },
  {
    name: "Classic Rock",
    icon: "🔥",
    songs: [
      { title: "Hotel California", artist: "Eagles" },
      { title: "Take It Easy", artist: "Eagles" },
      { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd" },
      { title: "Simple Man", artist: "Lynyrd Skynyrd" },
      { title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
      { title: "Patience", artist: "Guns N' Roses" },
      { title: "Born to Be Wild", artist: "Steppenwolf" },
      { title: "Livin' on a Prayer", artist: "Bon Jovi" },
      { title: "Crazy Little Thing Called Love", artist: "Queen" },
      { title: "I Want to Break Free", artist: "Queen" },
      { title: "Radio Ga Ga", artist: "Queen" },
      { title: "Come Together", artist: "Beatles" },
      { title: "Blackbird", artist: "Beatles" },
      { title: "Yesterday", artist: "Beatles" },
      { title: "Something", artist: "Beatles" },
      { title: "House of the Rising Sun", artist: "The White Buffalo" },
      { title: "Old Time Rock N' Roll", artist: "Bob Seger" },
      { title: "Free Fallin'", artist: "Tom Petty" },
      { title: "Wish You Were Here", artist: "Pink Floyd" },
      { title: "Like a Stone", artist: "Audioslave" },
      { title: "Losing My Religion", artist: "R.E.M." },
      { title: "Creep", artist: "Radiohead" },
    ],
  },
  {
    name: "Blues & Soul",
    icon: "🎷",
    songs: [
      { title: "Hit the Road Jack", artist: "Ray Charles" },
      { title: "I've Got a Woman", artist: "Ray Charles" },
      { title: "Unchain My Heart", artist: "Ray Charles" },
      { title: "Sittin' on the Dock of the Bay", artist: "Otis Redding" },
      { title: "Stand By Me", artist: "Ben E. King" },
      { title: "Bring It on Home to Me", artist: "Sam Cooke" },
      { title: "Valerie", artist: "Amy Winehouse" },
      { title: "Rehab", artist: "Amy Winehouse" },
      { title: "Back to Black", artist: "Amy Winehouse" },
      { title: "The Best", artist: "Tina Turner" },
      { title: "I Just Called to Say I Love You", artist: "Lionel Richie" },
      { title: "What a Wonderful World", artist: "Louis Armstrong" },
    ],
  },
  {
    name: "Folk & Acoustic",
    icon: "🌿",
    songs: [
      { title: "Blowin' in the Wind", artist: "Bob Dylan" },
      { title: "Knockin' on Heaven's Door", artist: "Bob Dylan" },
      { title: "Heart of Gold", artist: "Neil Young" },
      { title: "American Pie", artist: "Don McLean" },
      { title: "Hallelujah", artist: "Leonard Cohen" },
      { title: "Better Together", artist: "Jack Johnson" },
      { title: "Banana Pancakes", artist: "Jack Johnson" },
      { title: "Sitting Waiting Wishing", artist: "Jack Johnson" },
      { title: "I'm Yours", artist: "Jason Mraz" },
      { title: "93 Million Miles", artist: "Jason Mraz" },
      { title: "I Won't Give Up", artist: "Jason Mraz" },
      { title: "Wonderwall", artist: "Oasis" },
      { title: "Don't Look Back in Anger", artist: "Oasis" },
      { title: "Iris", artist: "Goo Goo Dolls" },
      { title: "A Horse with No Name", artist: "America" },
      { title: "Somewhere Over the Rainbow", artist: "Israel K." },
    ],
  },
  {
    name: "Pop & Ballads",
    icon: "💫",
    songs: [
      { title: "Perfect", artist: "Ed Sheeran" },
      { title: "Thinking Out Loud", artist: "Ed Sheeran" },
      { title: "Shape of You", artist: "Ed Sheeran" },
      { title: "Photograph", artist: "Ed Sheeran" },
      { title: "I See Fire", artist: "Ed Sheeran" },
      { title: "More Than Words", artist: "Extreme" },
      { title: "Wicked Game", artist: "Chris Isaak" },
      { title: "Every Breath You Take", artist: "The Police" },
      { title: "Heaven", artist: "Bryan Adams" },
      { title: "My Way", artist: "Frank Sinatra" },
      { title: "Fly Me to the Moon", artist: "Frank Sinatra" },
      { title: "Can't Take My Eyes Off You", artist: "Frankie Valli" },
      { title: "Piano Man", artist: "Billy Joel" },
      { title: "Rocket Man", artist: "Elton John" },
      { title: "Viva La Vida", artist: "Coldplay" },
      { title: "Sweet Caroline", artist: "Neil Diamond" },
      { title: "Dancing Queen", artist: "ABBA" },
    ],
  },
];

export default function Repertoire() {
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const total = repertoire.reduce((a, c) => a + c.songs.length, 0);
  const songs = repertoire[active].songs;
  const display = showAll ? songs : songs.slice(0, 12);

  return (
    <section id="repertoire" className="relative py-16 sm:py-24 md:py-32 bg-marsala overflow-hidden noise-bg">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold/60 text-sm uppercase tracking-[0.3em]"
          >
            What We Play
          </motion.span>
          <div className="overflow-hidden mt-3">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl text-cream"
            >
              Repertoire
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-cream/40 mt-4 text-base sm:text-lg"
          >
            {total}+ songs across {repertoire.length} genres — and always growing
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-6 origin-center"
          />
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-14"
        >
          {repertoire.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => { setActive(i); setShowAll(false); }}
              className={`relative px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 overflow-hidden ${
                active === i
                  ? "text-marsala-dark shadow-lg"
                  : "text-cream/50 hover:text-cream/80 border border-cream/10 hover:border-cream/20"
              }`}
            >
              {active === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gold rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {cat.icon} {cat.name}
                <span className="ml-1 opacity-60">({cat.songs.length})</span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Songs grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
          >
            {display.map((song, i) => (
              <motion.div
                key={`${song.title}-${song.artist}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="group flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/[0.08] border border-white/[0.03] hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <span className="text-gold/60 text-xs font-mono group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-cream/90 font-medium truncate text-sm group-hover:text-gold transition-colors">
                    {song.title}
                  </p>
                  <p className="text-cream/30 text-xs truncate">{song.artist}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {songs.length > 12 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-gold/70 hover:text-gold font-medium transition-colors text-sm uppercase tracking-widest"
            >
              {showAll ? "Show less" : `Show all ${songs.length} songs`}
              <span className="ml-2">{showAll ? "↑" : "↓"}</span>
            </button>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center text-cream/20 text-sm mt-16 max-w-md mx-auto"
        >
          We continuously expand our repertoire and take requests. Don&apos;t see your favorite? Ask us!
        </motion.p>
      </div>
    </section>
  );
}
