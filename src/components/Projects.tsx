import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="03 · Projects"
          title="Things I've built"
          description="End-to-end machine learning work, deployed and usable."
        />
        {projects.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line p-8 text-center text-muted">
            Projects are coming soon.
          </p>
        ) : (
          <div className="grid gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
