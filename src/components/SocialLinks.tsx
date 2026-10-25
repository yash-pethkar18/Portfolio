import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    profile.github && { href: profile.github, label: "GitHub", Icon: Github, external: true },
    profile.linkedin && { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, external: false },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Mail; external: boolean }[];

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
