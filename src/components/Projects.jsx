import Icon from './Icon.jsx';
import ProjectCard from './ProjectCard.jsx';
import { Reveal, Section, SectionHeader } from './ui.jsx';
import { projects, upcomingAreas } from '../data/profile.js';

export default function Projects() {
  return (
    <Section id="projetos">
      <SectionHeader
        id="projetos"
        index="03"
        eyebrow="Projetos em destaque"
        title="Soluções construídas a partir de problemas operacionais."
        description="Projetos práticos em que identifiquei um processo manual e desenvolvi uma ferramenta para torná-lo mais simples e organizado."
      />

      <div className="projects-list">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {upcomingAreas.length > 0 && (
        <Reveal className="upcoming">
          <div className="upcoming-head">
            <span className="project-number">{String(projects.length + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="upcoming-title">Próximas publicações</h3>
              <p className="upcoming-text">
                Áreas em que estou desenvolvendo novos projetos. Eles serão publicados aqui conforme forem concluídos.
              </p>
            </div>
          </div>
          <ul className="upcoming-grid">
            {upcomingAreas.map((a) => (
              <li key={a.title} className="upcoming-item">
                <Icon name={a.icon} size={18} />
                <span>{a.title}</span>
                <span className="upcoming-status">Em breve</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}
