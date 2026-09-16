import Link from "next/link";
import { projects } from "../lib/projects";

export default function ProjectNav({ current }: { current: string }) {
  const index = projects.findIndex((p) => p.slug === current);
  if (index === -1) return null;
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <nav className="project-nav wrap" aria-label="Outros projetos">
      <Link href={`/projetos/${prev.slug}`} className="project-nav-link project-nav-prev">
        <span className="project-nav-label">← Projeto anterior</span>
        <span className="project-nav-title">{prev.title}</span>
      </Link>
      <Link href={`/projetos/${next.slug}`} className="project-nav-link project-nav-next">
        <span className="project-nav-label">Próximo projeto →</span>
        <span className="project-nav-title">{next.title}</span>
      </Link>
    </nav>
  );
}
