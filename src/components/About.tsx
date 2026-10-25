import { about } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <SectionHeading eyebrow="01 · About" title="From raw data to working products" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {about.highlights.map((h, i) => (
              <Reveal as="li" key={h.label} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-line bg-card/60 p-5">
                  <p className="text-3xl font-bold text-accent">{h.value}</p>
                  <p className="mt-1 text-sm text-muted">{h.label}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
