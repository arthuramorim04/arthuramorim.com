import Link from "next/link";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <header>
        <nav className="wrap">
          <a href="#home" className="brand">
            <span className="brand-mark">A</span>Arthur Amorim
          </a>
          <ul className="nav-links" id="navLinks">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Competências</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="https://github.com/arthuramorim04" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/arthur-amorim/" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
          <button className="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false">☰</button>
        </nav>
      </header>

      <nav className="dots-nav" aria-label="Navegação por seções">
        <button className="dot active" data-target="#home" aria-label="Ir para Início"><span className="dot-tip">Início</span></button>
        <button className="dot" data-target="#about" aria-label="Ir para Sobre"><span className="dot-tip">Sobre</span></button>
        <button className="dot" data-target="#skills" aria-label="Ir para Competências"><span className="dot-tip">Competências</span></button>
        <button className="dot" data-target="#projects" aria-label="Ir para Projetos"><span className="dot-tip">Projetos</span></button>
      </nav>

      <main className="home-sections">
        <section id="home" className="hero wrap">
          <div className="grid-bg" />
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Disponível para novas conexões</div>
              <h1>Olá, eu sou Arthur Amorim</h1>
              <p className="role">
                Software Engineer <span className="dot-sep">•</span>{" "}
                <a href="https://www.mercadolivre.com.br" target="_blank" rel="noopener">Mercado Livre</a>
              </p>
              <p className="lede">
                Focado em <strong>arquitetura de software</strong>, sistemas distribuídos de alta escala
                e <strong>engenharia assistida por IA</strong> — desenhando sistemas orientados a eventos
                para o setor logístico.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="https://github.com/arthuramorim04" target="_blank" rel="noopener">Ver GitHub</a>
                <a className="btn btn-ghost" href="https://www.linkedin.com/in/arthur-amorim/" target="_blank" rel="noopener">Conectar no LinkedIn</a>
              </div>
              <div className="hero-badges">
                <span className="badge">📍 Florianópolis, BR</span>
                <span className="badge">🏢 Mercado Livre</span>
                <span className="badge">🧑‍💻 Full Stack</span>
                <span className="badge">⚡ Alta escala &amp; alto volume de processamento</span>
                <span className="badge">🧩 Microfrontends (React)</span>
              </div>
            </div>
            <div className="hero-avatar">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://github.com/arthuramorim04.png" alt="Foto de Arthur Amorim" width={280} height={280} loading="eager" />
            </div>
          </div>
          <button className="scroll-arrow scroll-next" data-target="#about" aria-label="Ir para a próxima seção">↓</button>
        </section>

        <section id="about" className="wrap">
          <button className="scroll-arrow scroll-up" data-target="#home" aria-label="Ir para a seção anterior">↑</button>
          <div className="section-head reveal">
            <div className="eyebrow">Sobre mim</div>
            <h2>Construindo uma base sólida em arquitetura, usando IA como acelerador — não atalho</h2>
          </div>
          <div className="about-body reveal">
            <p>
              Passei os últimos meses observando o momento exato em que a IA gera uma solução em segundos
              e o desenvolvedor aceita o código sem revisar. Em ambientes de alta escala, o resultado disso
              é perigoso: código sintaticamente perfeito, mas estruturalmente genérico. Ferramentas como
              Claude ou Codex, sem um olhar crítico de contexto, entregam a resposta média — e a média não
              aguenta o tranco de milhões de eventos. A IA não resolve a complexidade por si só; ela entrega
              o padrão mais provável.
            </p>
            <p>
              Minha atuação é unir o potencial da IA à construção dessa base — uma base sólida de arquitetura
              de software que busco todos os dias aprofundar. Uso a
              tecnologia para validar ideias rapidamente e fazer a solução quebrar o quanto antes, expondo
              gargalos e falhas de design que levariam meses para aparecer no desenvolvimento tradicional.
            </p>
            <blockquote className="quote">
              &quot;A máquina está trabalhando para o seu design de arquitetura, ou você está aceitando o design da máquina?&quot;
            </blockquote>
          </div>
          <button className="scroll-arrow scroll-next" data-target="#skills" aria-label="Ir para a próxima seção">↓</button>
        </section>

        <section id="skills" className="wrap">
          <button className="scroll-arrow scroll-up" data-target="#about" aria-label="Ir para a seção anterior">↑</button>
          <div className="section-head reveal">
            <div className="eyebrow">Competências</div>
            <h2>Onde eu atuo</h2>
            <p>Três frentes que se reforçam: arquitetura de escala, engenharia assistida por IA e cultura técnica.</p>
          </div>
          <div className="cards">
            <div className="card reveal">
              <span className="icon">🏗️</span>
              <h3>Arquitetura &amp; Engenharia Full Stack</h3>
              <ul>
                <li>Event-Driven Architecture (EDA), Microsserviços, Clean Architecture, CQRS</li>
                <li>Sistemas distribuídos de alta disponibilidade, processamento assíncrono, mensageria/filas</li>
                <li>Microfrontends em ReactJS — criação e integração de MFEs via FRM (Module Federation)</li>
                <li>Redução de latência, controle de gargalos de I/O e uso de recursos</li>
                <li>Observabilidade: tracing distribuído, métricas e logs ponta a ponta</li>
              </ul>
            </div>
            <div className="card reveal">
              <span className="icon">🤖</span>
              <h3>Inteligência Artificial &amp; Engenharia Assistida</h3>
              <ul>
                <li>Uso avançado de LLMs (Claude, OpenAI, Codex) como co-pilotos de ideação e prototipação</li>
                <li>Estratégias de fail-fast assistido para identificar riscos arquiteturais cedo</li>
                <li>Agentes, automações de fluxo de trabalho e integrações via API com modelos generativos</li>
              </ul>
            </div>
            <div className="card reveal">
              <span className="icon">🤝</span>
              <h3>Práticas &amp; Colaboração Técnica</h3>
              <ul>
                <li>Code reviews críticos, focados em sustentabilidade e arquitetura</li>
                <li>Soluções orientadas ao impacto de negócio (domínio logístico, produtos internos críticos)</li>
                <li>Documentação clara, alinhamento com stakeholders e post-mortems compartilhados</li>
              </ul>
            </div>
          </div>
          <button className="scroll-arrow scroll-next" data-target="#projects" aria-label="Ir para a próxima seção">↓</button>
        </section>

        <section id="projects" className="wrap">
          <button className="scroll-arrow scroll-up" data-target="#skills" aria-label="Ir para a seção anterior">↑</button>
          <div className="section-head reveal">
            <div className="eyebrow">Projetos</div>
            <h2>Coisas que construí do zero</h2>
            <p>Um app pessoal e um produto real em uso por uma cliente — do desenho de dados ao deploy.</p>
          </div>
          <div className="projects-grid">
            <Link className="project-card reveal" href="/projetos/checklist-app">
              <div className="project-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/projetos/checklist/tarefa-concluida.jpeg" alt="Tela de um grupo de tarefas no app Checklist, com uma tarefa concluída e o contador de ciclos" loading="lazy" />
              </div>
              <div className="project-body">
                <h3>Checklist App</h3>
                <p>App de checklist offline para rotinas recorrentes — compras, tarefas de casa — com grupos reiniciáveis e contador de ciclos concluídos.</p>
                <div className="project-tags">
                  <span className="badge">React Native</span>
                  <span className="badge">Expo</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">Offline-first</span>
                </div>
              </div>
              <span className="project-link">Ver projeto →</span>
            </Link>

            <Link className="project-card reveal" href="/projetos/ana-advogada">
              <div className="project-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/projetos/ana/home-site.png" alt="Página inicial do site institucional da advogada Ana Luiza da Silveira" loading="lazy" />
              </div>
              <div className="project-body">
                <h3>Ana Luiza da Silveira — Advocacia</h3>
                <p>Site institucional de Direito Digital + painel de gestão multi-cliente sob medida: processos, clientes, agenda e serviços num só lugar.</p>
                <div className="project-tags">
                  <span className="badge">Next.js</span>
                  <span className="badge">Go</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">Multi-tenant</span>
                </div>
              </div>
              <span className="project-link">Ver projeto →</span>
            </Link>

            <Link className="project-card reveal" href="/projetos/arthuramorim-com">
              <div className="project-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/projetos/site/home.png" alt="Tela inicial deste site, arthuramorim.com" loading="lazy" />
              </div>
              <div className="project-body">
                <h3>Este site</h3>
                <p>O próprio arthuramorim.com — portfólio pessoal em Next.js, com tema escuro, scroll-snap e esta seção de projetos.</p>
                <div className="project-tags">
                  <span className="badge">Next.js 16</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">CSS puro</span>
                  <span className="badge">Vercel</span>
                </div>
              </div>
              <span className="project-link">Ver projeto →</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
