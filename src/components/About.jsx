import Icon from './Icon.jsx';
import { Reveal, Section, SectionHeader } from './ui.jsx';
import { about } from '../data/profile.js';

export default function About() {
  return (
    <Section id="sobre">
      <div className="about-grid">
        <div className="about-text">
          <SectionHeader id="sobre" index="01" eyebrow="Sobre mim" title="Tecnologia a serviço de problemas reais." />
          <Reveal delay={80}>
            <p className="lead">{about.intro}</p>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="body-text">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <ul className="about-highlights">
          {about.highlights.map((h, i) => (
            <Reveal as="li" key={h.label} delay={i * 70} className="card highlight-card">
              <span className="icon-badge">
                <Icon name={h.icon} size={18} />
              </span>
              <div>
                <h3 className="card-label">{h.label}</h3>
                <p className="card-text">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
