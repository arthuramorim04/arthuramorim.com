import type { Metadata } from "next";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectNav from "../../components/ProjectNav";

export const metadata: Metadata = {
  title: "Checklist App — Arthur Amorim",
  description:
    "Checklist App: app de checklist offline-first para tarefas recorrentes, feito com React Native e Expo.",
};

const slides = [
  { src: "/projetos/checklist/home-vazia.jpeg", alt: "Tela inicial do Checklist App sem nenhum grupo criado ainda", caption: "Tela inicial vazia, com o botão de criar o primeiro grupo" },
  { src: "/projetos/checklist/novo-grupo.jpeg", alt: "Modal de criação de um novo grupo, com campos de nome e descrição", caption: "Criando um grupo — nome e descrição opcional" },
  { src: "/projetos/checklist/home-grupo.jpeg", alt: "Tela inicial mostrando o card do grupo Compras com estatísticas de pendentes, total e ciclos", caption: "Cada grupo mostra pendentes, total e ciclos completos" },
  { src: "/projetos/checklist/tarefa-pendente.jpeg", alt: "Tela do grupo Compras com uma tarefa chamada Café ainda não concluída", caption: "Tarefa simples, ainda pendente" },
  { src: "/projetos/checklist/tarefa-concluida.jpeg", alt: "Tela do grupo Compras com a tarefa Café concluída e um ciclo completo contabilizado", caption: "Tarefa concluída — o ciclo do grupo já foi contabilizado" },
];

export default function ChecklistAppPage() {
  return (
    <>
      <ProjectHeader />
      <main className="doc-main">
        <section className="wrap">
          <div className="eyebrow doc-eyebrow">App Android · React Native + Expo</div>
          <h1 className="hero-title">Checklist App</h1>
          <p className="hero-lede">
            App de checklist para o dia a dia — grupos de tarefas que podem ser reiniciados para
            rotinas recorrentes, como compras da semana ou faxina de casa. Funciona 100% offline
            e guarda um histórico de quantas vezes cada tarefa e cada grupo já foram concluídos.
          </p>
          <div className="tags">
            <span className="badge">React Native</span>
            <span className="badge">Expo (expo-router)</span>
            <span className="badge">TypeScript</span>
            <span className="badge">Zustand</span>
            <span className="badge">Offline-first (AsyncStorage)</span>
            <span className="badge">EAS Build</span>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="https://github.com/arthuramorim04/checklist-app" target="_blank" rel="noopener">Ver código no GitHub</a>
            <a className="btn btn-ghost" href="https://expo.dev/accounts/arthuramorim05/projects/checklist-app/builds" target="_blank" rel="noopener">Ver builds (instalar APK)</a>
          </div>
        </section>

        <section className="wrap doc-section">
          <h2>Telas do app</h2>
          <p className="section-sub">Da tela inicial vazia até um grupo com uma tarefa concluída e o ciclo contabilizado.</p>
          <Carousel slides={slides} />
        </section>

        <section className="wrap doc-section">
          <h2>Como funciona</h2>
          <ul className="feature-list">
            <li><strong>Grupos reiniciáveis</strong>Um botão desmarca todas as tarefas de uma vez, ideal para listas que se repetem toda semana.</li>
            <li><strong>Dois contadores de progresso</strong>O grupo conta quantos ciclos completos já fez; cada tarefa guarda quantas vezes já foi concluída, mesmo depois de reiniciar o grupo.</li>
            <li><strong>Tarefas com duração</strong>Além do checkbox simples, uma tarefa pode pedir quanto tempo levou para ser feita.</li>
            <li><strong>Recorrência semanal</strong>Tarefas podem ser marcadas para acontecer num dia fixo da semana (ex: lavar roupa toda segunda).</li>
            <li><strong>100% offline</strong>Todo o estado é persistido localmente no aparelho — não depende de internet nem de backend.</li>
            <li><strong>Responsivo</strong>Layout em coluna única no celular e em grade no tablet.</li>
          </ul>
        </section>

        <section className="wrap doc-section prose">
          <h2>Stack técnica</h2>
          <p>
            Construído com <strong>Expo</strong> e <strong>expo-router</strong> (navegação por arquivos),
            estado global e persistência via <strong>Zustand</strong> + <code>AsyncStorage</code>, e
            tipado em <strong>TypeScript</strong> de ponta a ponta. O APK é gerado via{" "}
            <strong>EAS Build</strong>, sem precisar de Android Studio instalado localmente.
          </p>
        </section>
      </main>
      <ProjectNav current="checklist-app" />
      <Footer backLink={{ href: "/#projects", label: "← Todos os projetos" }} />
    </>
  );
}
