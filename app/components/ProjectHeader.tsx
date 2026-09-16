import Link from "next/link";

export default function ProjectHeader() {
  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="brand">
          <span className="brand-mark">A</span>Arthur Amorim
        </Link>
        <Link href="/#projects" className="back-link">
          ← Todos os projetos
        </Link>
      </nav>
    </header>
  );
}
