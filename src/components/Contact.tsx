import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-surface/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="06 · Contact"
          title="Let's build something together"
          description="I'm looking for opportunities in machine learning, data science, and AI development. Send a message and I'll reply as soon as I can."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <Reveal className="space-y-5">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-line bg-card/60 p-5 transition-colors hover:border-accent/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Mail size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted">Email</span>
                <span className="block break-all font-medium">{profile.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-card/60 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-xs text-muted">Location</span>
                <span className="block font-medium">{profile.location}</span>
              </span>
            </div>
            <SocialLinks />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-card/60 p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
