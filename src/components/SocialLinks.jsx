import Icon from './Icon.jsx';
import { ExternalLink, Todo } from './ui.jsx';
import { profile } from '../data/profile.js';

/** Links de GitHub / LinkedIn / e-mail. Links vazios não são exibidos em produção. */
export default function SocialLinks({ variant = 'icon', include = ['github', 'linkedin', 'email'] }) {
  const { github, linkedin, email } = profile.links;

  const items = [
    { key: 'github', href: github, label: 'GitHub', icon: 'github', external: true },
    { key: 'linkedin', href: linkedin, label: 'LinkedIn', icon: 'linkedin', external: true },
    { key: 'email', href: email && `mailto:${email}`, label: 'E-mail', icon: 'mail', external: false },
  ].filter((i) => include.includes(i.key));

  return (
    <ul className={`social social-${variant}`}>
      {items.map((item) =>
        item.href ? (
          <li key={item.key}>
            {item.external ? (
              <ExternalLink href={item.href} className="social-link" aria-label={item.label}>
                <Icon name={item.icon} size={18} />
                {variant === 'text' && <span>{item.label}</span>}
              </ExternalLink>
            ) : (
              <a href={item.href} className="social-link" aria-label={item.label}>
                <Icon name={item.icon} size={18} />
                {variant === 'text' && <span>{item.label}</span>}
              </a>
            )}
          </li>
        ) : (
          import.meta.env.DEV && (
            <li key={item.key}>
              <Todo>{item.label}</Todo>
            </li>
          )
        )
      )}
    </ul>
  );
}
