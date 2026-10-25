import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="04 · Experience & Education"
          title="Where I've learned and worked"
        />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <Briefcase size={18} className="text-accent" /> Internships
            </h3>
            <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
              {experience.map((e, i) => (
                <Reveal as="li" key={e.org + e.role} delay={i * 0.08} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]"
                  />
                  <p className="font-mono text-xs text-accent">{e.period}</p>
                  <h4 className="mt-1 text-xl font-semibold">{e.role}</h4>
                  <p className="text-sm text-muted">
                    {e.org} · {e.location}
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted sm:text-base">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-line" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <GraduationCap size={18} className="text-accent" /> Education
            </h3>
            <ul className="space-y-4">
              {education.map((ed, i) => (
                <Reveal as="li" key={ed.role} delay={i * 0.08}>
                  <div className="rounded-2xl border border-line bg-card/60 p-5">
                    <p className="font-mono text-xs text-accent">{ed.period}</p>
                    <h4 className="mt-1 font-semibold">{ed.role}</h4>
                    <p className="mt-1 text-sm text-muted">{ed.org}</p>
                    <p className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {ed.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
