# arthuramorim.com

Landing page pessoal de Arthur Amorim — Software Engineer.

App em **Next.js 16 (App Router) + TypeScript**, com CSS puro (sem framework de estilos) preservando o visual original: tema escuro, seções em tela cheia com scroll-snap, navegação por dots e reveal-on-scroll. Hospedado na Vercel.

## Estrutura

- `app/page.tsx` — página inicial (hero, sobre, competências, projetos).
- `app/projetos/<slug>/page.tsx` — uma rota por projeto em destaque, com galeria (carrossel), stack técnica e links.
- `app/components/` — `Carousel` (galeria de imagens), `ScrollEffects` (nav mobile, reveal-on-scroll, dots-nav, progress bar — roda em todas as páginas via layout), `Footer`, `ProjectHeader`.
- `app/globals.css` — todos os estilos (tokens de cor/tipografia + componentes).
- `public/projetos/<projeto>/` — screenshots de cada projeto.

## Rodando localmente

```bash
npm install
npm run dev
```

## Deploy

Projeto Next.js padrão — importar o repositório na Vercel (framework detectado automaticamente). Todo push na branch principal gera um novo deploy.
