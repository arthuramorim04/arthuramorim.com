export interface ProjectSummary {
  slug: string;
  title: string;
}

// Ordem de exibição na home e na navegação entre projetos.
export const projects: ProjectSummary[] = [
  { slug: "checklist-app", title: "Checklist App" },
  { slug: "ana-advogada", title: "Ana Luiza da Silveira — Advocacia" },
  { slug: "arthuramorim-com", title: "Este site (arthuramorim.com)" },
];
