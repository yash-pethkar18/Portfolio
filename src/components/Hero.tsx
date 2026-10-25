"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-36">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <motion.div
          className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/15 blur-[110px] sm:h-[560px] sm:w-[560px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-accent2/15 blur-[100px]" />
      </div>

      <motion.div
        className="container-x flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to internships and opportunities
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-[2.35rem] font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">{profile.name}</span>
        </motion.h1>

        <motion.h2 variants={item} className="mt-4 text-xl font-medium text-ink/90 sm:text-2xl">
          {profile.title}
        </motion.h2>

        <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.intro}
        </motion.p>

        <motion.p variants={item} className="mt-4 flex items-center gap-2 text-sm text-muted">
          <MapPin size={15} className="text-accent" /> {profile.location} · {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projects" className="btn-primary">
            View My Projects <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn-ghost">
            Contact Me
          </a>
          {profile.resumeAvailable && (
            <a href={profile.resumePath} download className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
          )}
        </motion.div>

        <motion.div variants={item} className="mt-8">
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  );
}
