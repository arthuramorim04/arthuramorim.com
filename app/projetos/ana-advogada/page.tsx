import type { Metadata } from "next";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectNav from "../../components/ProjectNav";

export const metadata: Metadata = {
  title: "Ana Luiza da Silveira — Advocacia — Arthur Amorim",
  description:
    "Site institucional e painel de gestão multi-cliente para a advogada Ana Luiza da Silveira, especialista em Direito Digital.",
};

const siteSlides = [
  { src: "/projetos/ana/home-site.png", alt: "Página inicial do site, com o título Direito Digital e foto da advogada Ana Luiza", caption: "Home — proposta de valor e contato direto" },
  { src: "/projetos/ana/servicos.png", alt: "Seção de serviços do site, com cards para Contratos, Consultoria, Redes Sociais, LGPD, Negócios Digitais e Treinamentos", caption: "Serviços — contratos, LGPD, negócios digitais e mais" },
];

const adminSlides = [
  { src: "/projetos/ana/admin-login.png", alt: "Tela de login restrito do painel administrativo", caption: "Acesso restrito por login" },
  { src: "/projetos/ana/admin-dashboard.png", alt: "Dashboard do painel administrativo com cards de processos ativos, clientes, serviços e valores pagos, além de próximas reuniões", caption: "Dashboard — processos, clientes, serviços e agenda" },
];

const multiTenantSlides = [
  { src: "/projetos/ana/oficina-home.png", alt: "Site institucional da J&S Motos Racing, uma oficina de motos, com identidade visual completamente diferente do site da Ana", caption: "Mesma plataforma, outra marca: site da J&S Motos Racing" },
  { src: "/projetos/ana/oficina-dashboard.png", alt: "Dashboard administrativo da oficina J&S Motos Racing, com cards de clientes, serviços e valores pagos, e um alerta de estoque baixo", caption: "Dashboard com alerta de estoque baixo — módulo que a Ana não usa" },
  { src: "/projetos/ana/oficina-estoque.png", alt: "Tela de estoque de produtos da oficina, com busca por nome ou SKU e tabela de produtos cadastrados", caption: "Controle de estoque por SKU, preço e quantidade" },
  { src: "/projetos/ana/oficina-vendas.png", alt: "Tela de vendas da oficina, com histórico de vendas por cliente, valor total e data", caption: "Histórico de vendas vinculado a cada cliente" },
];

export default function AnaAdvogadaPage() {
  return (
    <>
      <ProjectHeader />
      <main className="doc-main">
        <section className="wrap">
          <div className="eyebrow doc-eyebrow">Site institucional + painel administrativo</div>
          <h1 className="hero-title">Ana Luiza da Silveira — Advocacia</h1>
          <p className="hero-lede">
            Presença digital completa para uma advogada especializada em Direito Digital:
            site institucional voltado a empresas e empreendedores, e um painel de gestão
            multi-cliente sob medida para organizar processos, clientes, agenda e serviços
            no dia a dia do escritório.
          </p>
          <div className="tags">
            <span className="badge">Next.js 14</span>
            <span className="badge">TypeScript</span>
            <span className="badge">styled-components</span>
            <span className="badge">Go</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Redis</span>
            <span className="badge">JWT · multi-tenant</span>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="https://analuizaadvogada.com/" target="_blank" rel="noopener">Visitar site</a>
          </div>
        </section>

        <section className="wrap doc-section">
          <h2>Site institucional</h2>
          <p className="section-sub">Página voltada a empresas e empreendedores que atuam no ambiente digital.</p>
          <Carousel slides={siteSlides} />
        </section>

        <section className="wrap doc-section">
          <h2>Painel de gestão multi-cliente</h2>
          <p className="section-sub">
            Área administrativa privada do escritório — processos, clientes, agenda e serviços
            num só lugar. Acesso restrito, por isso sem link de demonstração pública aqui.
          </p>
          <Carousel slides={adminSlides} />
        </section>

        <section className="wrap doc-section">
          <h2>Multi-tenant na prática</h2>
          <p className="section-sub">
            A mesma plataforma atende outro segmento sem tocar no core: a J&amp;S Motos Racing,
            uma oficina de motos, roda com marca e cores próprias e um módulo extra de{" "}
            <strong>estoque e vendas</strong> que a Ana não usa.
          </p>
          <Carousel slides={multiTenantSlides} />
        </section>

        <section className="wrap doc-section prose">
          <h2>Stack técnica</h2>
          <p>
            O <strong>frontend</strong> (site + painel) é construído em <strong>Next.js 14</strong> com{" "}
            <strong>TypeScript</strong> e <strong>styled-components</strong>, com login via
            Google OAuth e sessão JWT. O <strong>backend</strong> é uma API em <strong>Go</strong>{" "}
            própria, com <strong>PostgreSQL</strong> como banco principal e <strong>Redis</strong>{" "}
            para cache/sessão, desenhada com arquitetura <strong>multi-tenant</strong> para
            atender múltiplos clientes/escritórios de forma isolada no mesmo sistema.
          </p>
        </section>
      </main>
      <ProjectNav current="ana-advogada" />
      <Footer backLink={{ href: "/#projects", label: "← Todos os projetos" }} />
    </>
  );
}
