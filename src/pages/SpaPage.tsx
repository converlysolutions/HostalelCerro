import React from 'react';

export const SpaPage: React.FC = () => {
  const treatments = [
    { name: 'Masaje Bienestar', duration: '55 min', price: '35€', description: 'Masaje antiestreñimiento para mejorar el tránsito intestinal y aliviar molestias digestivas.' },
    { name: 'Masaje Belleza', duration: '55 min', price: '35€', description: 'Masaje anticelulítico en vientre, glúteos y muslos con envoltura para reducir la celulitis y mejorar la firmeza de la piel.' },
    { name: 'Masaje Descontracturante', duration: '55 min', price: '35€', description: 'Zona a elegir: espalda más brazos o piernas. Ideal para liberar tensiones musculares y contracturas.' },
    { name: 'Masaje Antiestrés', duration: '55 min', price: '35€', description: 'Masaje relajante en espalda, brazos y piernas boca abajo para eliminar el estrés y la tensión acumulada.' },
    { name: 'Masaje Salud', duration: '55 min', price: '50€', description: 'Drenaje linfático en piernas para mejorar la circulación, reducir la retención de líquidos y aliviar la sensación de piernas cansadas.' },
    { name: 'Masaje Deportivo', duration: '55 min', price: '35€', description: 'Pre-competición o post-competición con estiramientos en piernas. Perfecto para preparar o recuperar los músculos después del ejercicio.' },
  ];

  // All 9 images for the gallery
  const galleryImages = [
    //'/img/paginas/spa/gallery-1-large.webp',
    //'/img/paginas/spa/gallery-2-large.webp',
    '/img/paginas/spa/gallery-4-large.webp',
    '/img/paginas/spa/gallery-5-large.webp',
    '/img/paginas/spa/gallery-6-large.webp',
    '/img/paginas/spa/gallery-7-large.webp',
    //'/img/paginas/spa/gallery-8-large.webp',
    '/img/paginas/spa/gallery-9-large.webp',
    '/img/paginas/spa/gallery-10-large.webp',
  ];

  const imageAlts = [
    "Vista del jacuzzi del spa, ideal para la relajación",
    "Piscina interior del spa con un gran ventanal y vistas a la naturaleza",
    "Mujer relajándose en el spa, disfrutando de la tranquilidad",
    "Entrada a la zona de bienestar, decorada con un estilo moderno y acogedor",
    "Detalle de la arquitectura y la piscina del spa",
    "Persona en albornoz disfrutando de las instalaciones del spa",
    "Zona de hamacas para el descanso junto a la piscina del spa",
    "Luz natural iluminando la piscina y la zona de relax del spa",
    "Panorámica de la piscina interior del spa con su ambiente sereno",
  ];


  return (
    <div className="pt-20 bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
           <img src="/img/paginas/spa/hero-large.webp" alt="Cielo azul despejado y sereno, representando la tranquilidad del spa" className="w-full h-full object-cover"/>
           <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[var(--h1)] leading-tight">Bienestar</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">Un espacio donde el tiempo se detiene y el relax toma el control.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-[var(--h2)]">Conexión y Calma</h2>
          <p className="mt-4 opacity-80 leading-relaxed">
            Nuestro spa ha sido diseñado como una extensión de la naturaleza que nos rodea. Grandes ventanales, materiales naturales y una atmósfera de silencio absoluto te invitan a un viaje de desconexión. Disfruta de nuestro circuito de aguas, sauna finlandesa y una cuidada carta de tratamientos.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md group">
                <img 
                    src={src} 
                    alt={imageAlts[index]} 
                    className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 smooth-transition"
                    loading="lazy"
                />
            </div>
            ))}
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 group relative">
              <h2 className="font-heading text-[var(--h2)]">Masajes Concertados</h2>
              <svg className="w-5 h-5 text-[var(--color-accent)] cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-[var(--color-cream)] text-[var(--color-text)] text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition whitespace-nowrap z-10 border border-[var(--color-accent)]/20">
                Los masajes deben solicitarse con antelación
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[var(--color-cream)]"></div>
              </div>
            </div>
            <p className="mt-2 max-w-xl mx-auto opacity-70">Un ritual diseñado para armonizar cuerpo y mente.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {treatments.map(treatment => (
              <div key={treatment.name} className="bg-[var(--color-bg)] p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-heading text-xl">{treatment.name}</h3>
                  <span className="font-bold text-lg text-[var(--color-accent)]">{treatment.price}</span>
                </div>
                <p className="text-sm opacity-60 font-semibold mt-1">{treatment.duration}</p>
                <p className="text-sm mt-3 opacity-80">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};