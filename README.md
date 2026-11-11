# Portfólio — Desenvolvedor de Software

Site de portfólio em **React + Vite**, dark mode, responsivo e pronto para a Vercel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm run preview  # testa o build de produção
```

## Como editar o conteúdo

**Todo o conteúdo fica em [`src/data/profile.js`](src/data/profile.js).** Não é preciso mexer nos componentes.

Checklist antes de publicar:

- [ ] `profile.name` e `profile.initials`
- [ ] `profile.links.github`, `linkedin` e `email`
- [ ] `education[].institution` e `education[].period`
- [ ] Capturas do projeto em `public/projects/inspecoes/` e caminhos em `projects[0].media`
- [ ] `projects[0].links.demo` / `repo` (se existirem)
- [ ] `<title>`, `description` e `author` em [`index.html`](index.html)

Em `npm run dev`, tudo o que falta preencher aparece como um aviso tracejado amarelo **"A preencher"**.
No site publicado esses avisos **não aparecem** — links vazios são ocultados automaticamente.

### Adicionar um novo projeto

Copie o objeto do projeto em `projects` (em `profile.js`), mude `id`, `number` e os textos,
e remova a área correspondente de `upcomingAreas`.

### Competências

Em `skillGroups`, cada item tem `status: 'pratica'` (uso prático) ou `'aprendizado'` (em estudo).
O site diferencia os dois visualmente (ponto sólido × contorno tracejado).

## Estrutura

```
src/
  data/profile.js        ← conteúdo editável
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx
    Projects.jsx  ProjectCard.jsx  MediaFrame.jsx
    Education.jsx  Studies.jsx  Contact.jsx  Footer.jsx
    SocialLinks.jsx  Icon.jsx  ui.jsx (Reveal, Section, SectionHeader, Todo)
  styles/global.css      ← tokens de cor/tipografia no topo (:root)
public/
  favicon.svg  robots.txt  projects/
```

## Publicar

1. Crie um repositório no GitHub e envie o projeto:
   ```bash
   git init && git add . && git commit -m "Portfólio" 
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```
2. Na [Vercel](https://vercel.com/new), importe o repositório. O preset **Vite** é detectado automaticamente
   (build `npm run build`, saída `dist`). Cada `git push` publica uma nova versão.
