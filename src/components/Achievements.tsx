import { Award, GitPullRequest } from "lucide-react";
import { achievements } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="container-x">
        <SectionHeading eyebrow="05 · Achievements" title="Certifications & contributions" />
        <ul className="grid gap-4 md:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = a.kind === "Certification" ? Award : GitPullRequest;
            return (
              <Reveal as="li" key={a.title} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-card/60 p-6 transition-colors hover:border-accent/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="mt-0.5 font-mono text-xs text-accent">{a.meta}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{a.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
