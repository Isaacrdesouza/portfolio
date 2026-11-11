import Icon from './Icon.jsx';
import { Reveal, Section, SectionHeader } from './ui.jsx';
import { courses, languages, studies } from '../data/profile.js';

export default function Studies() {
  return (
    <Section id="estudos">
      <SectionHeader
        id="estudos"
        index="05"
        eyebrow="Estudos e desenvolvimento"
        title="Sempre aprendendo algo novo."
        description={studies.intro}
      />

      <Reveal className="focus-bar" delay={60}>
        <span className="focus-label">
          <span className="status-dot" aria-hidden="true" />
          Estudando agora
        </span>
        <ul className="focus-list">
          {studies.currentFocus.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </Reveal>

      <ul className="studies-grid">
        {studies.items.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 3) * 70} className="card study-card">
            <div className="study-top">
              <span className="icon-badge">
                <Icon name={s.icon} size={18} />
              </span>
              <span className={`tag ${s.tag === 'Foco principal' ? 'tag-accent' : ''}`}>{s.tag}</span>
            </div>
            <h3 className="card-title">{s.title}</h3>
            <p className="card-text">{s.text}</p>
          </Reveal>
        ))}
      </ul>

      <div className="extras-grid">
        <Reveal className="card extra-card">
          <div className="skill-card-head">
            <span className="icon-badge">
              <Icon name="graduation" size={18} />
            </span>
            <h3 className="card-title">Cursos complementares · {courses.provider}</h3>
          </div>
          <ul className="chips">
            {courses.items.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="card extra-card" delay={70}>
          <div className="skill-card-head">
            <span className="icon-badge">
              <Icon name="globe" size={18} />
            </span>
            <h3 className="card-title">Idiomas</h3>
          </div>
          <ul className="lang-list">
            {languages.map((l) => (
              <li key={l.name}>
                <strong>{l.name}</strong>
                <span>{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
