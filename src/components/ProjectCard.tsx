"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-card/70 p-6 transition-colors hover:border-accent/40 sm:p-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-[80px] transition-opacity group-hover:opacity-100"
      />
      <div className="relative">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {project.featured && (
            <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
              Featured
            </span>
          )}
          <span className="text-xs text-muted">{project.status}</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h3>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 max-w-3xl space-y-2.5 text-sm leading-relaxed text-muted sm:text-base">
          {project.contribution.map((c) => (
            <li key={c} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{c}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Live Demo <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Github size={16} /> Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
