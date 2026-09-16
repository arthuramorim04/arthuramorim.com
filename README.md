# arthuramorim.com

Landing page pessoal de Arthur Amorim — Software Engineer.

Site estático em HTML/CSS/JS puros (`index.html`), sem build step nem dependências externas além de fontes do Google Fonts. Pode ser hospedado em qualquer serviço de static hosting (Netlify, Vercel, GitHub Pages, S3, etc).

## Estrutura

- `index.html` — página principal, com hero, sobre, competências, projetos e redes.
- `projetos/` — uma página por projeto em destaque (galeria de telas, stack técnica, links).
- `assets/projetos.css` e `assets/projetos.js` — estilos e o carrossel de imagens compartilhados pelas páginas de projeto.
- `assets/projetos/<projeto>/` — screenshots de cada projeto.

## Deploy

Aponte o domínio `arthuramorim.com` para o serviço de hospedagem escolhido e sirva `index.html` como arquivo raiz.
