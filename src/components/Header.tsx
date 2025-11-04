
import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useApp } from '../App';
import { NAV_LINKS } from '../constants';
import { Sun, Moon, Menu, X } from 'lucide-react';

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
          <Link to="/" aria-label="Volver a la página de inicio" className="flex items-center gap-x-3">
            <img src="/img/site/logo.png" alt="Logo de Hostal El Cerro" className="h-12 w-auto dark:invert smooth-transition" />
            <span className="font-heading text-xl font-bold tracking-wider hidden sm:block">Hostal El Cerro</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-[var(--color-surface)] smooth-transition"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={openBookingModal}
              className="hidden lg:inline-block bg-[var(--color-accent)] text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:opacity-90 smooth-transition"
            >
              Reservar
            </button>
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
