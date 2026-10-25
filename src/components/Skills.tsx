import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="02 · Skills"
          title="Technical toolkit"
          description="The languages, libraries, and tools I use across the machine learning lifecycle."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal as="li" key={g.category} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-card/60 p-6 transition-colors hover:border-accent/40">
                <h3 className="mb-4 text-lg font-semibold">{g.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="chip hover:border-accent/50 hover:text-ink">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
