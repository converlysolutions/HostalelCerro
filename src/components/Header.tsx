
import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useApp } from '../App';
import { NAV_LINKS } from '../constants';
import { Sun, Moon, Menu, X, Ban } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openBookingModal } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
    <RouterNavLink
      to={href.startsWith('##') ? `/#${href.substring(2)}` : href.substring(1)}
      className="text-sm font-medium tracking-wider uppercase relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 after:bg-[var(--color-accent)] after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
      onClick={onClick}
    >
      {children}
    </RouterNavLink>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled
          ? 'bg-[var(--color-surface)] backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" aria-label="Volver a la página de inicio" className="flex items-center gap-x-3 mr-4">
            {/* 1. Logo: Visible siempre, EXCEPTO entre 'lg' y 'xl' */}
            <img src="/img/site/logo.png" alt="Logo de Hostal El Cerro" className="h-12 w-auto smooth-transition block lg:hidden xl:block" />
          </Link>

          <nav className="hidden lg:flex items-center lg:space-x-4 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Tooltip Icons - Desktop and Mobile */}
            <div className="flex items-center space-x-3">
              {/* +18 Icon with Tooltip */}
              <div className="relative group">
                <div className="p-2 rounded-full hover:bg-[var(--color-surface)] smooth-transition cursor-pointer">
                  <div className="w-7 h-7 rounded-full border-2 border-[var(--color-text)] flex items-center justify-center text-xs font-bold text-[var(--color-text)]">
                    18+
                  </div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-[var(--color-cream)] text-[var(--color-text)] text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition whitespace-nowrap shadow-lg border border-[var(--color-text)]/10">
                  Solo adultos
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-1 border-4 border-transparent border-b-[var(--color-cream)]"></div>
                </div>
              </div>

              {/* No Pets Icon with Tooltip */}
              <div className="relative group">
                <div className="p-2 rounded-full hover:bg-[var(--color-surface)] smooth-transition cursor-pointer">
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text)]">
                      {/* Paw print */}
                      <circle cx="11" cy="4" r="2"/>
                      <circle cx="18" cy="8" r="2"/>
                      <circle cx="20" cy="16" r="2"/>
                      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
                    </svg>
                    <Ban size={28} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--color-text)]" strokeWidth={2} />
                  </div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-[var(--color-cream)] text-[var(--color-text)] text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition whitespace-nowrap shadow-lg z-50 border border-[var(--color-text)]/10">
                  NO admitimos mascotas
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-1 border-4 border-transparent border-b-[var(--color-cream)]"></div>
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full hover:bg-[var(--color-surface)] smooth-transition"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform ${ // Se quita el fondo de aquí
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* El botón de X se posiciona absolutamente y por encima del nav (z-10) */}
        <div className="absolute top-0 right-0 z-10 flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        
        {/* El nav tiene el fondo, altura de pantalla completa y centra su contenido */}
        <nav className="flex flex-col items-center justify-center h-screen w-full space-y-8 bg-[var(--color-bg)]">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              openBookingModal();
              setIsMobileMenuOpen(false);
            }}
            className="mt-8 bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-bold text-lg uppercase tracking-wider"
          >
            Reservar Ahora
          </button>
        </nav>
      </div>
    </header>
  );
};
