import Icon from './Icon.jsx';
import { BrowserFrame, PhoneFrame } from './MediaFrame.jsx';
import { ExternalLink, Reveal, Todo } from './ui.jsx';

export default function ProjectCard({ project }) {
  const { media, links } = project;
  const folder = `public/projects/${project.id}/`;

  return (
    <Reveal as="article" className="card project-card" aria-labelledby={`proj-${project.id}`}>
      <header className="project-head">
        <div>
          <p className="project-meta">
            <span className="project-number">{project.number}</span>
            {project.featured && <span className="tag tag-accent">Projeto principal</span>}
            {project.inUse && (
              <span className="tag tag-done">
                <span className="status-dot tag-dot" aria-hidden="true" />
                {project.inUse}
              </span>
            )}
          </p>
          <h3 className="project-title" id={`proj-${project.id}`}>
            {project.title}
          </h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>

        <div className="project-links">
          {links.demo ? (
            <ExternalLink href={links.demo} className="btn btn-sm btn-primary">
              Ver demonstração <Icon name="arrowUpRight" size={16} />
            </ExternalLink>
          ) : (
            <Todo>Link da demonstração</Todo>
          )}
          {links.repo ? (
            <ExternalLink href={links.repo} className="btn btn-sm btn-ghost">
              <Icon name="github" size={16} /> Repositório
            </ExternalLink>
          ) : project.repoPrivate ? (
            <span className="private-note">
              <Icon name="lock" size={14} /> Código privado — uso empresarial
            </span>
          ) : (
            <Todo>Link do repositório</Todo>
          )}
        </div>
      </header>

      <div className="project-media">
        <BrowserFrame
          src={media.web.src}
          alt={media.web.alt}
          hint={`Interface web → ${folder}`}
        />
        <PhoneFrame
          src={media.mobile.src}
          alt={media.mobile.alt}
          hint={`Versão mobile → ${folder}`}
        />
      </div>

      {media.gallery.length > 0 && (
        <ul className="project-gallery" aria-label="Capturas de tela adicionais">
          {media.gallery.map((img) => (
            <li key={img.src}>
              <a href={img.src} target="_blank" rel="noopener noreferrer">
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              </a>
            </li>
          ))}
        </ul>
      )}

      <p className="project-description">{project.description}</p>

      <div className="project-story">
        <div className="story-block">
          <p className="story-label">
            <span className="story-dot is-problem" aria-hidden="true" />O problema
          </p>
          <p>{project.problem}</p>
        </div>
        <div className="story-block">
          <p className="story-label">
            <span className="story-dot is-solution" aria-hidden="true" />A solução
          </p>
          <p>{project.solution}</p>
        </div>
      </div>

      <div className="project-foot">
        <div>
          <h4 className="foot-title">Funcionalidades</h4>
          <ul className="feature-list">
            {project.features.map((f) => (
              <li key={f}>
                <Icon name="check" size={16} />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="foot-title">Tecnologias</h4>
          <ul className="chips">
            {project.stack.map((s) => (
              <li key={s} className="chip is-practice">
                <span className="chip-dot" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
