import React from 'react';

export const SpaPage: React.FC = () => {
  const treatments = [
    { name: 'Masaje Relajante Gredos', duration: '60 min', price: '80€', description: 'Un masaje de cuerpo completo con aceites esenciales de plantas locales para liberar tensiones.' },
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
            <h2 className="font-heading text-[var(--h2)]">Masajes Concertados</h2>
            <p className="mt-2 max-w-xl mx-auto opacity-70">Un ritual diseñado para armonizar cuerpo y mente.</p>
          </div>
          <div className="flex justify-center">
            {treatments.map(treatment => (
              <div key={treatment.name} className="bg-[var(--color-bg)] p-6 rounded-2xl shadow-sm w-full max-w-md">
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