import type { Metadata } from "next";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectNav from "../../components/ProjectNav";

export const metadata: Metadata = {
  title: "arthuramorim.com — Arthur Amorim",
  description: "Bastidores deste portfólio pessoal: Next.js, tema escuro e páginas de projeto com carrossel.",
};

const slides = [
  { src: "/projetos/site/home.png", alt: "Tela inicial do arthuramorim.com, com hero em tema escuro e foto do Arthur Amorim", caption: "Home — seções em tela cheia com scroll-snap" },
  { src: "/projetos/site/projetos.png", alt: "Seção de projetos do arthuramorim.com, com os cards de cada projeto em destaque", caption: "Esta mesma seção de projetos que você está vendo agora" },
];

export default function ArthurAmorimComPage() {
  return (
    <>
      <ProjectHeader />
      <main className="doc-main">
        <section className="wrap">
          <div className="eyebrow doc-eyebrow">Portfólio pessoal · Next.js</div>
          <h1 className="hero-title">arthuramorim.com</h1>
          <p className="hero-lede">
            Este mesmo site — o que você está usando agora para ler isso. Um portfólio pessoal com
            tema escuro, seções em tela cheia com scroll-snap e uma seção de projetos com páginas
            próprias, carrossel de imagens e navegação entre projetos.
          </p>
          <div className="tags">
            <span className="badge">Next.js 16 (App Router)</span>
            <span className="badge">TypeScript</span>
            <span className="badge">CSS puro</span>
            <span className="badge">Vercel</span>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="https://github.com/arthuramorim04/arthuramorim.com" target="_blank" rel="noopener">Ver código no GitHub</a>
          </div>
        </section>

        <section className="wrap doc-section">
          <h2>Por dentro do site</h2>
          <p className="section-sub">A home e a própria seção de projetos que trouxe você até aqui.</p>
          <Carousel slides={slides} />
        </section>

        <section className="wrap doc-section">
          <h2>Detalhes de implementação</h2>
          <ul className="feature-list">
            <li><strong>Scroll-snap por seção</strong>Home, Sobre, Competências e Projetos ocupam a tela toda, com navegação por dots lateral e setas.</li>
            <li><strong>Reveal-on-scroll</strong>Cards e títulos aparecem suavemente conforme entram na tela, via IntersectionObserver.</li>
            <li><strong>Rotas de verdade por projeto</strong>Cada projeto é uma rota própria (<code>/projetos/&lt;slug&gt;</code>), não uma âncora ou arquivo <code>.html</code> solto.</li>
            <li><strong>Carrossel próprio</strong>Sem biblioteca externa — scroll-snap horizontal nativo, com dots, setas e navegação por teclado.</li>
            <li><strong>SPA-safe</strong>A navegação entre páginas é client-side (Next.js Link), mas o reveal-on-scroll e o menu continuam funcionando normalmente entre uma página e outra.</li>
          </ul>
        </section>

        <section className="wrap doc-section prose">
          <h2>Stack técnica</h2>
          <p>
            <strong>Next.js 16</strong> com App Router e TypeScript, sem framework de CSS —
            todo o visual é CSS puro em <code>globals.css</code>, com um pequeno conjunto de
            componentes client (<code>Carousel</code>, <code>ScrollEffects</code>) para a parte
            interativa. Deploy contínuo na <strong>Vercel</strong>, direto do GitHub.
          </p>
        </section>
      </main>
      <ProjectNav current="arthuramorim-com" />
      <Footer backLink={{ href: "/#projects", label: "← Todos os projetos" }} />
    </>
  );
}
