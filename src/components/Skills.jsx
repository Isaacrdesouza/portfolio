import Icon from './Icon.jsx';
import { Reveal, Section, SectionHeader } from './ui.jsx';
import { skillGroups } from '../data/profile.js';

const STATUS = {
  pratica: { label: 'Uso prático', className: 'is-practice' },
  aprendizado: { label: 'Em aprendizado', className: 'is-learning' },
};

export default function Skills() {
  return (
    <Section id="competencias" className="section-alt">
      <SectionHeader
        id="competencias"
        index="02"
        eyebrow="Competências técnicas"
        title="Ferramentas com que trabalho e tecnologias que estou estudando."
      />

      <Reveal className="legend" delay={60}>
        {Object.values(STATUS).map((s) => (
          <span key={s.label} className={`legend-item ${s.className}`}>
            <span className="legend-swatch" aria-hidden="true" />
            {s.label}
          </span>
        ))}
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 70}
            className={`card skill-card ${group.accent ? 'is-accent' : ''}`}
          >
            <div className="skill-card-head">
              <span className="icon-badge">
                <Icon name={group.icon} size={18} />
              </span>
              <h3 className="card-title">{group.title}</h3>
            </div>
            <ul className="chips" aria-label={`Tecnologias de ${group.title}`}>
              {group.items.map((item) => {
                const s = STATUS[item.status];
                return (
                  <li key={item.name} className={`chip ${s.className}`}>
                    <span className="chip-dot" aria-hidden="true" />
                    {item.name}
                    <span className="sr-only"> — {s.label}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
