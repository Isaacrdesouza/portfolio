import { Reveal, Section, SectionHeader, Todo } from './ui.jsx';
import { education } from '../data/profile.js';

export default function Education() {
  return (
    <Section id="formacao" className="section-alt">
      <SectionHeader id="formacao" index="04" eyebrow="Formação acadêmica" title="Trajetória." />

      <ol className="timeline">
        {education.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90} className={`timeline-item ${item.current ? 'is-current' : ''}`}>
            <span className="timeline-node" aria-hidden="true" />
            <div className="card timeline-card">
              <div className="timeline-top">
                <span className={`tag ${item.current ? 'tag-accent' : 'tag-done'}`}>{item.status}</span>
                {item.period ? <span className="timeline-period">{item.period}</span> : <Todo>Período</Todo>}
              </div>
              <h3 className="card-title">{item.title}</h3>
              {item.institution ? <p className="timeline-inst">{item.institution}</p> : <Todo>Instituição</Todo>}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
