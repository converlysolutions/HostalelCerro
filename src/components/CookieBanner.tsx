
import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-cream)] shadow-lg p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm opacity-90">
        Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.
        <a href="#/politica-cookies" className="underline ml-2">Leer más</a>
      </p>
      <div className="flex-shrink-0">
        <button 
          onClick={handleAccept}
          className="bg-[var(--color-primary)] text-[var(--color-bg)] dark:bg-[var(--color-accent)] dark:text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:opacity-90 smooth-transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
