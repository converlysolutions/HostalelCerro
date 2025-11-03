
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center bg-[var(--color-bg)] px-4">
      <div>
        <p className="text-4xl font-bold text-[var(--color-accent)] font-heading">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl font-heading">Página no encontrada</h1>
        <p className="mt-6 text-base leading-7 opacity-80">
          Lo sentimos, no hemos podido encontrar la página que buscas.
        </p>
        <div className="mt-10">
          <Link to="/" className="rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Volver a la página de inicio
          </Link>
        </div>
      </div>
    </div>
  );
};
