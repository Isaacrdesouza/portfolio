import Icon from './Icon.jsx';
import SocialLinks from './SocialLinks.jsx';
import { profile, education, studies } from '../data/profile.js';

/** Pequeno "editor" que resume o perfil em forma de código. */
function ProfileCode() {
  const done = education.find((e) => !e.current);
  const current = education.find((e) => e.current);

  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-window-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="code-window-file">perfil.js</span>
      </div>
      <pre className="code-window-body">
        <code>
          <span className="ln">1</span><span className="tk-key">const</span> <span className="tk-var">perfil</span> = {'{'}
          {'\n'}<span className="ln">2</span>  <span className="tk-prop">formacao</span>: <span className="tk-str">"{done.short}"</span>,
          {'\n'}<span className="ln">3</span>  <span className="tk-prop">graduacao</span>: <span className="tk-str">"{current.short}"</span>,
          {'\n'}<span className="ln">4</span>  <span className="tk-prop">stack</span>: [<span className="tk-str">"JavaScript"</span>, <span className="tk-str">"Python"</span>, <span className="tk-str">"SQL"</span>],
          {'\n'}<span className="ln">5</span>  <span className="tk-prop">estudando</span>: [{studies.currentFocus.map((s, i) => (
            <span key={s}>{i > 0 && ', '}<span className="tk-str">"{s}"</span></span>
          ))}],
          {'\n'}<span className="ln">6</span>  <span className="tk-prop">interesse</span>: <span className="tk-str">"Implantação de ERP"</span>,
          {'\n'}<span className="ln">7</span>  <span className="tk-prop">disponivel</span>: <span className="tk-bool">{String(profile.available)}</span>,
          {'\n'}<span className="ln">8</span>{'}'};<span className="caret" />
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          {profile.available && (
            <p className="status-pill fade-up" style={{ '--d': '0ms' }}>
              <span className="status-dot" aria-hidden="true" />
              {profile.availabilityText}
            </p>
          )}

          <p className="hero-name fade-up" style={{ '--d': '60ms' }}>
            {profile.name}
            <span className="hero-role"> · {profile.role}</span>
          </p>

          <h1 id="hero-title" className="hero-title fade-up" style={{ '--d': '120ms' }}>
            {profile.headline}
          </h1>

          <p className="hero-subtitle fade-up" style={{ '--d': '180ms' }}>
            {profile.subheadline}
          </p>

          <div className="hero-actions fade-up" style={{ '--d': '240ms' }}>
            <a href="#projetos" className="btn btn-primary">
              Conheça meus projetos
              <Icon name="arrowRight" size={18} />
            </a>
            <a href="#contato" className="btn btn-ghost">
              Entre em contato
            </a>
          </div>

          <div className="hero-social fade-up" style={{ '--d': '300ms' }}>
            <SocialLinks include={['github', 'linkedin']} variant="text" />
          </div>
        </div>

        <div className="hero-visual fade-up" style={{ '--d': '200ms' }}>
          <ProfileCode />
        </div>
      </div>

      <a href="#sobre" className="scroll-hint" aria-label="Ir para a seção Sobre">
        <Icon name="arrowDown" size={16} />
      </a>
    </section>
  );
}
