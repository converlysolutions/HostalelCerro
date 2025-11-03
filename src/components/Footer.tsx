import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const legalLinks = [
    { href: '#/aviso-legal', label: 'Aviso Legal' },
    { href: '#/politica-privacidad', label: 'Privacidad' },
    { href: '#/politica-cookies', label: 'Cookies' },
  ];

  return (
    <footer className="bg-[var(--color-cream)] text-[var(--color-text)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">

        {/* Logo */}
        <div className="mb-8 inline-block">
          <Link to="/" aria-label="Volver a la página de inicio" className="inline-flex items-center gap-x-3">
              <img src="/img/site/logo.png" alt="Logo de Hostal El Cerro" className="h-12 w-auto dark:invert smooth-transition" />
              <span className="font-heading text-xl font-bold">Hostal El Cerro</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2">
            {NAV_LINKS.map(link => {
              const href = link.href.startsWith('##') ? `#/#${link.href.substring(2)}` : link.href;
              return (
                <li key={link.href}>
                  <a href={href} className="text-sm opacity-80 hover:opacity-100 smooth-transition tracking-wider uppercase font-medium">
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Info & Social */}
        <div className="mb-10">
          <p className="text-sm opacity-80">
            P.º Arturo Duperier, 55, 05470 Pedro Bernardo, Ávila
          </p>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm">
            <a href="mailto:info@hostalelcerro.com" className="opacity-80 hover:opacity-100 smooth-transition">info@hostalelcerro.com</a>
            <span className="opacity-50 hidden sm:inline">·</span>
            <a href="tel:920389103" className="opacity-80 hover:opacity-100 smooth-transition">920 389 103</a>
          </div>
          <div className="mt-8">
            <a 
              href="https://www.instagram.com/hostal_el_cerro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="inline-block p-2 rounded-full opacity-80 hover:opacity-100 hover:text-[var(--color-accent)] smooth-transition">
                <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-text)] border-opacity-20 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 text-xs opacity-60">
            <ul className="flex flex-wrap justify-center gap-x-4">
                {legalLinks.map(link => (
                   <li key={link.href}><a href={link.href} className="hover:opacity-100 smooth-transition">{link.label}</a></li>
                ))}
            </ul>
            <p>&copy; {new Date().getFullYear()} Hostal El Cerro. Todos los derechos reservados.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
