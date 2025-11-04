
import React from 'react';
import { BookOpen } from 'lucide-react';

export const RestaurantPage: React.FC = () => {
  const galleryImages = [
    '/img/paginas/restaurante/gallery-1-small.webp',
    '/img/paginas/restaurante/gallery-2-small.webp',
    '/img/paginas/restaurante/gallery-3-small.webp',
    '/img/paginas/restaurante/gallery-4-small.webp',
    '/img/paginas/restaurante/gallery-5-small.webp',
  ];
  
  const galleryAlts = [
    "Terraza del restaurante al atardecer con vistas al pueblo",
    "Terraza lateral del restaurante con vistas a la montaña",
    "Mesa para dos en un balcón con vistas al pueblo de Pedro Bernardo",
    "Vista cenital de una mesa puesta para dos en la terraza",
    "Terraza del restaurante con un espectacular atardecer naranja y vistas a la montaña",
  ];

  // Duplicate images for a seamless loop
  const repeatedImages = [...galleryImages, ...galleryImages];
  const repeatedAlts = [...galleryAlts, ...galleryAlts];

  return (
    <div className="pt-20 bg-[var(--color-bg)]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
           <img src="/img/paginas/restaurante/hero-large.webp" alt="Plato de carne gourmet servido en el restaurante" className="w-full h-full object-cover brightness-110 contrast-125"/>
           <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[var(--h1)] leading-tight">Gastronomía de Altura</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">Un homenaje a los sabores de Gredos, donde la tradición y la vanguardia se encuentran en cada plato.</p>
        </div>
      </section>

      {/* Content & CTA Section */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-[var(--h2)]">Descubre Nuestra Carta</h2>
          <p className="mt-4 opacity-80 leading-relaxed">
            Te invitamos a un viaje culinario donde los sabores auténticos de la Sierra de Gredos son los protagonistas. Nuestra cocina rinde homenaje a la tierra, con una especialidad en las magníficas carnes de Ávila, siempre acompañadas por una cuidada selección de vinos locales. De lunes a viernes, te ofrecemos un delicioso menú diario. Si deseas deleitarte con un asado o una caldereta de cabrito memorables, te agradecemos que nos avises con antelación; nos aseguraremos de que esté perfecto a tu llegada.
          </p>
          <div className="mt-12">
            <a
              href="https://carta.avocaty.io/hostalcerro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[var(--color-accent)] text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:opacity-90 smooth-transition btn-pulse"
            >
              <BookOpen size={24} />
              Ver la Carta
            </a>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="font-heading text-[var(--h2)]">Disfruta de la comida tanto como las vistas.</h2>
        </div>
        <div className="relative w-full overflow-hidden group">
          <div className="flex marquee-content group-hover:[animation-play-state:paused] flex-nowrap w-max">
            {repeatedImages.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-72 md:w-96 mx-4">
                <img 
                  src={src} 
                  alt={repeatedAlts[index]} 
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg" 
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
};
