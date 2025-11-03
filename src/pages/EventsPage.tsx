import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ZoomIn, X } from 'lucide-react';

const menuData = [
  { name: 'Menú 1', image: '/img/paginas/eventos/menu-1-large.webp' },
  { name: 'Menú 2', image: '/img/paginas/eventos/menu-2-large.webp' },
  { name: 'Menú 3', image: '/img/paginas/eventos/menu-3-large.webp' },
];

const mediaGallery = [
  { type: 'video' as const, url: 'https://player.vimeo.com/video/1133076048?badge=0&autopause=0&player_id=0&app_id=58479', title: 'Video de boda en Hostal El Cerro' },
  { type: 'video' as const, url: 'https://player.vimeo.com/video/1133076025?badge=0&autopause=0&player_id=0&app_id=58479', title: 'Video de ceremonia de boda en los jardines' },
  { type: 'image' as const, url: '/img/paginas/eventos/media-gallery-1-large.webp', alt: 'Mesa de boda preparada con menú y centro de flores' },
  { type: 'image' as const, url: '/img/paginas/eventos/media-gallery-2-large.webp', alt: 'Vista cenital de una mesa de boda redonda lista para los comensales' },
];

const ImageLightbox: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/80 z-[110] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-white z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 smooth-transition"
                aria-label="Cerrar vista ampliada"
            >
                <X size={32}/>
            </button>
            <div className="relative w-full max-w-4xl max-h-[90vh] mx-auto" onClick={e => e.stopPropagation()}> {/* Ajuste de tamaño del lightbox */}
                <img src={imageUrl} alt="Contenido multimedia ampliado" className="w-full h-full object-contain rounded-lg"/>
            </div>
        </div>
    );
};


export const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="pt-20 bg-[var(--color-bg)] animate-fade-in">
      {lightboxImage && <ImageLightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />}
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
           <img src="/img/paginas/eventos/hero-large.webp" alt="Ceremonia de boda en la playa con pétalos de rosa en el pasillo" className="w-full h-full object-cover"/>
           <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[var(--h1)] leading-tight">Bodas y Eventos</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">Celebra tu día especial en un entorno inolvidable, donde cada detalle está pensado para crear recuerdos imborrables.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-[var(--h2)]">Un Escenario Mágico para tu "Sí, Quiero"</h2>
          <p className="mt-4 opacity-80 leading-relaxed">
            En Hostal El Cerro, la majestuosidad de la Sierra de Gredos se convierte en el telón de fondo de tu historia de amor. Ofrecemos un espacio íntimo y exclusivo, perfecto para bodas con encanto y celebraciones que buscan la belleza en los detalles. Nuestro equipo se dedica a personalizar cada momento, desde la ceremonia hasta el banquete, asegurando que tu día sea tan único como vuestra unión.
          </p>
        </div>
      </section>

      {/* New Media Gallery */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
            <h2 className="font-heading text-[var(--h2)]">Momentos Inolvidables</h2>
            <p className="mt-2 max-w-2xl mx-auto opacity-70">
                Espacios que se transforman, detalles que enamoran y recuerdos que perduran. Así son los eventos en El Cerro.
            </p>
        </div>
        {/* Se ha quitado 'items-start' para que las filas sean uniformes */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {mediaGallery.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg bg-black">
              {item.type === 'image' ? (
                // Las imágenes mantienen el aspect-ratio 4:3
                <button onClick={() => setLightboxImage(item.url)} className="group relative w-full block cursor-pointer aspect-[4/3]" aria-label={`Ampliar imagen: ${item.alt}`}>
                  <img src={item.url} alt={item.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 smooth-transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn size={48} className="text-white" />
                  </div>
                </button>
              ) : (
                // Los videos usan el aspect-ratio 9:16 (vertical)
                <div className="w-full aspect-[9/16]">
                  <iframe
                    src={item.url}
                    title={item.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Menus Section */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-[var(--h2)]">Propuestas Gastronómicas</h2>
            <p className="mt-2 max-w-xl mx-auto opacity-70">Nuestros menús de boda están elaborados con los mejores productos de la tierra, combinando tradición y creatividad para ofrecer una experiencia culinaria inolvidable.</p>
          </div>
          
          <div className="flex justify-center border-b border-[var(--color-text)]/20 mb-8">
            {menuData.map((menu, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 font-heading text-lg smooth-transition relative ${activeTab === index ? 'text-[var(--color-accent)]' : 'opacity-60 hover:opacity-100'}`}
              >
                {menu.name}
                {activeTab === index && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-accent)]"></div>}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center min-h-[400px]">
            {menuData.map((menu, index) => (
              <div key={index} className={`${activeTab === index ? 'block animate-fade-in' : 'hidden'}`}>
                <button
                  onClick={() => setLightboxImage(menu.image)}
                  className="group relative block max-w-sm mx-auto cursor-pointer aspect-[4/5]" // Añadido aspect-ratio y ajustado max-w
                  aria-label={`Ver ${menu.name} en grande`}
                >
                  <img
                    src={menu.image}
                    alt={`Vista previa de ${menu.name}`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg" // object-cover
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 smooth-transition flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-2xl">
                      <ZoomIn size={48} className="text-white"/>
                      <span className="sr-only">Ampliar imagen</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Heart size={48} className="mx-auto text-[var(--color-accent)] mb-4" />
          <h2 className="font-heading text-[var(--h2)]">Hagamos Realidad Tu Sueño</h2>
          <p className="mt-4 opacity-80 leading-relaxed">
            Contacta con nuestro equipo de eventos para recibir una propuesta personalizada y comenzar a planificar el día más feliz de vuestras vidas. Estamos deseando escuchar vuestra historia.
          </p>
          <div className="mt-12">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-[var(--color-accent)] text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:opacity-90 smooth-transition"
            >
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};