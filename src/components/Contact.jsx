import { useState } from 'react';
import Icon from './Icon.jsx';
import SocialLinks from './SocialLinks.jsx';
import { ExternalLink, Reveal, Section, Todo } from './ui.jsx';
import { contact, profile } from '../data/profile.js';

export default function Contact() {
  const { email, linkedin, resume } = profile.links;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard indisponível — o link mailto continua funcionando */
    }
  };

  // Botão principal: e-mail se houver; senão LinkedIn.
  const primary = email
    ? { href: `mailto:${email}`, label: 'Enviar e-mail', icon: 'mail', external: false }
    : linkedin
      ? { href: linkedin, label: 'Falar no LinkedIn', icon: 'linkedin', external: true }
      : null;

  return (
    <Section id="contato" className="section-contact">
      <Reveal className="contact-card">
        <div className="contact-glow" aria-hidden="true" />
        <p className="eyebrow eyebrow-center">
          <span className="eyebrow-index">06</span>
          <span className="eyebrow-line" aria-hidden="true" />
          Contato
        </p>
        <h2 className="contact-title" id="contato-title">
          {contact.title}
        </h2>
        <p className="contact-text">{contact.text}</p>

        <div className="contact-actions">
          {primary ? (
            primary.external ? (
              <ExternalLink href={primary.href} className="btn btn-primary btn-lg">
                <Icon name={primary.icon} size={18} /> {primary.label}
              </ExternalLink>
            ) : (
              <a href={primary.href} className="btn btn-primary btn-lg">
                <Icon name={primary.icon} size={18} /> {primary.label}
              </a>
            )
          ) : (
            <Todo>Preencha e-mail ou LinkedIn para ativar o botão de contato</Todo>
          )}

          {email && (
            <button type="button" className="btn btn-ghost btn-lg" onClick={copyEmail} aria-live="polite">
              <Icon name={copied ? 'check' : 'copy'} size={18} />
              {copied ? 'E-mail copiado' : email}
            </button>
          )}

          {resume && (
            <a href={resume} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">
              <Icon name="file" size={18} /> Currículo
            </a>
          )}
        </div>

        <div className="contact-social">
          <SocialLinks variant="text" />
        </div>

        {profile.location && (
          <p className="contact-location">
            <Icon name="pin" size={15} /> {profile.location}
          </p>
        )}
      </Reveal>
    </Section>
  );
}
