import Icon from './Icon.jsx';
import SocialLinks from './SocialLinks.jsx';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. Desenvolvido com React.
        </p>
        <div className="footer-right">
          <SocialLinks />
          <a href="#inicio" className="back-top" aria-label="Voltar ao topo">
            <Icon name="arrowDown" size={16} className="rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  );
}
