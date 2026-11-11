import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

const IS_DEV = import.meta.env.DEV;

/** Aparição suave ao entrar na tela (respeita prefers-reduced-motion via CSS). */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Cabeçalho padrão das seções. */
export function SectionHeader({ id, index, eyebrow, title, description }) {
  return (
    <Reveal className="section-header">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-line" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section-title" id={`${id}-title`}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">{children}</div>
    </section>
  );
}

/**
 * Marcador de conteúdo a preencher.
 * Visível apenas em desenvolvimento — em produção não renderiza nada.
 */
export function Todo({ children }) {
  if (!IS_DEV) return null;
  return (
    <span className="todo" title="Preencha em src/data/profile.js">
      <Icon name="alert" size={14} />
      {children}
    </span>
  );
}

/** Link externo com rel seguro. */
export function ExternalLink({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
