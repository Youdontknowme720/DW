import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/w_logo.svg';

const navLinks = [
  { path: '/', label: 'Startseite' },
  { path: '/schilder', label: 'Schilder' },
  { path: '/industriepanels', label: 'Industriepanels' },
  { path: '/fraesteile', label: 'Frästeile' },
  { path: '/aluprofile', label: 'Aluprofile' },
  { path: '/schweissen', label: 'Schweißen' },
  { path: '/fertigungsverfahren', label: 'Verfahren' },
];

const bottomLinks = [
  { path: '/ansprechpartner', label: 'Ansprechpartner' },
  { path: '/kontakt', label: 'Kontakt' },
  { path: '/impressum', label: 'Impressum' },
  { path: '/datenschutz', label: 'Datenschutz' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Dieter Wenzelmann GmbH" />
        </Link>

        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <ul className="navbar-bottom-links">
            {bottomLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
