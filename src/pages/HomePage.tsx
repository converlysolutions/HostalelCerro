import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { rooms, experiences, testimonials } from '../data/seed';
import { useApp } from '../App';
import { Star, MapPin, Wind, BedDouble, Sun, StarHalf, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="text-center">
    <div className="inline-block p-4 bg-[var(--color-cream)] rounded-full mb-4">
      {icon}
    </div>
    <h3 className="font-heading text-lg font-semibold">{title}</h3>
    <p className="text-sm opacity-70 mt-1">{children}</p>
  </div>
);

const RoomSpotlightCard: React.FC<{ room: typeof rooms[0] }> = ({ room }) => (
    <Link to={`/habitaciones/${room.slug}`} className="group block overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl smooth-transition">
        <div className="relative aspect-[4/5]">
            <img src={room.mainImage} alt={room.name} className="w-full h-full object-cover smooth-transition group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-heading text-2xl">{room.name}</h3>
                <p className="text-sm">Desde <span className="font-bold">{room.priceFrom}€</span>/noche</p>
            </div>
        </div>
    </Link>
);

const ExperienceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // FIX: Replaced NodeJS.Timeout with number for browser compatibility.
  const timeoutRef = useRef<number | null>(null);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  }, []);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isPaused) {
      timeoutRef.current = window.setTimeout(goNext, 5000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {experiences.map((exp) => (
            <div key={exp.id} className="flex-shrink-0 w-full">
              <div className="group block overflow-hidden rounded-2xl relative bg-[var(--color-cream)] shadow-lg aspect-[4/3]">
                  <img src={exp.image} alt={exp.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h4 className="font-heading text-2xl">{exp.name}</h4>
                      <p className="text-sm opacity-90 mt-2">{exp.summary}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <button onClick={goPrev} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 text-[var(--color-text)] bg-[var(--color-surface)] p-2 rounded-full hover:bg-[var(--color-accent)] hover:text-white smooth-transition z-10 shadow-md" aria-label="Actividad anterior">
        <ArrowLeftCircle size={32} />
      </button>
      <button onClick={goNext} className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 text-[var(--color-text)] bg-[var(--color-surface)] p-2 rounded-full hover:bg-[var(--color-accent)] hover:text-white smooth-transition z-10 shadow-md" aria-label="Siguiente actividad">
        <ArrowRightCircle size={32} />
      </button>
      
      {/* Dots */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full smooth-transition ${currentIndex === index ? 'bg-[var(--color-accent)] scale-125' : 'bg-[var(--color-text)] opacity-30'}`}
            aria-label={`Ir a la actividad ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} size={24} fill="currentColor" />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key="half" size={24} fill="currentColor" stroke="currentColor" />);
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} size={24} fill="none" stroke="currentColor" />);
  }
  return stars;
};

const TestimonialMarquee: React.FC = () => {
    const repeatedTestimonials = [...testimonials, ...testimonials];
    const averageRating = 4.5;

    return (
        <div className="relative w-full overflow-hidden py-12">
            <div className="text-center mb-12">
                <div className="flex justify-center items-center text-[var(--color-accent)] mb-2">
                    {renderStars(averageRating)}
                </div>
                <h2 className="text-2xl font-heading">Valoración media: {averageRating.toFixed(1)} / 5</h2>
            </div>
            <div className="flex marquee-content flex-nowrap w-max">
                {repeatedTestimonials.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-96 mx-4 p-8 bg-[var(--color-cream)] rounded-2xl shadow-sm">
                        <p className="italic">"{testimonial.text}"</p>
                        <p className="font-bold mt-4">- {testimonial.name}, {testimonial.origin}</p>
                    </div>
                ))}
            </div>
             <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent"></div>
             <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent"></div>
        </div>
    );
};


export const HomePage: React.FC = () => {
  const { openBookingModal } = useApp();
  const featuredRooms = rooms.filter(r => r.isFeatured).slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
           <img src="/img/paginas/home/hero-large.webp" alt="Vistas del Hostal El Cerro y las montañas con la luna" className="w-full h-full object-cover object-bottom"/>
           <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="font-heading text-white text-[var(--h1)] leading-tight">Descanso con vistas a Gredos</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">Habitaciones luminosas, spa y piscina en plena naturaleza. Tu refugio solo para adultos.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/habitaciones" className="bg-white/90 text-[var(--color-primary)] px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white smooth-transition">Ver habitaciones</Link>
            <button onClick={openBookingModal} className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:opacity-90 smooth-transition">Reservar ahora</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="sobre-nosotros" className="py-20 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-[var(--h2)]">Un sueño en Gredos</h2>
              <p className="mt-4 opacity-80 leading-relaxed">
                Hostal El Cerro nació de un amor profundo por la Sierra de Gredos y de un deseo de crear un espacio donde la naturaleza y el confort convivieran en perfecta armonía. Somos una familia que, tras años visitando la zona, decidió echar raíces y construir un refugio para aquellos que, como nosotros, buscan una pausa del ruido del mundo.
              </p>
              <p className="mt-4 opacity-80 leading-relaxed">
                Cada piedra, cada viga de madera y cada detalle de la decoración han sido elegidos con mimo, buscando reflejar la belleza austera y elegante del paisaje que nos rodea.
              </p>
            </div>
            <div className="rounded-2xl w-full shadow-lg aspect-[4/5] overflow-hidden relative bg-black">
              <iframe
                // 2. URL con autoplay, loop, muted (sin &background=1)
                src="https://player.vimeo.com/video/1133298550?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&transparent=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                /*
                  3. CSS para escalar y centrar el video 9:16
                     - w-full: El video toma el ancho del contenedor.
                     - aspect-[9/16]: Fuerza el ratio vertical, haciéndolo más alto.
                     - top-1/2, left-1/2, -translate-x-1/2, -translate-y-1/2: Centra el video
                       alto en el contenedor 4:5. El overflow-hidden del padre corta el exceso.
                */
                className="absolute w-full aspect-[9/16] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                title="Entorno del Hostal El Cerro"
              ></iframe>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center mt-20">
             <h3 className="font-heading text-3xl">Nuestra Filosofía: El Lujo del Silencio</h3>
             <p className="mt-4 opacity-80 leading-relaxed max-w-2xl mx-auto">
              Creemos que el verdadero lujo en el siglo XXI es el silencio, el tiempo y el espacio. Por eso, hemos concebido El Cerro como un hotel exclusivamente para adultos, un santuario donde la paz no es una opción, sino la esencia de la experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <HighlightCard icon={<span className="text-2xl">18+</span>} title="Solo Adultos">Tranquilidad y relax garantizados.</HighlightCard>
            <HighlightCard icon={<Wind size={24} />} title="Spa con Vistas">Bienestar frente a la montaña.</HighlightCard>
            <HighlightCard icon={<Sun size={24} />} title="Piscina de Temporada">Un oasis en nuestro jardín.</HighlightCard>
            <HighlightCard icon={<MapPin size={24} />} title="Naturaleza en Gredos">Un entorno para explorar y conectar.</HighlightCard>
          </div>
        </div>
      </section>
      
      {/* Rooms Spotlight */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-heading text-[var(--h2)]">Un refugio para cada estilo</h2>
                <p className="mt-2 max-w-xl mx-auto opacity-70">Nuestras habitaciones están diseñadas para ofrecerte el máximo confort con vistas espectaculares.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredRooms.map((room, index) => (
                    <div key={room.id} className={index === 1 ? 'md:col-span-1 md:mt-16' : 'md:col-span-1'}>
                        <RoomSpotlightCard room={room} />
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Experiences Carousel */}
      <section id="explora-gredos" className="py-20 pb-28 bg-[var(--color-bg)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-[var(--h2)]">Explora Gredos</h2>
            <p className="mt-2 max-w-2xl mx-auto opacity-70">Desde cumbres míticas y pueblos con encanto hasta aventuras a caballo o vuelos en parapente. Gredos es un mundo de posibilidades por descubrir.</p>
          </div>
          <ExperienceCarousel />
        </div>
      </section>
      
      {/* Map & Contact */}
      <section id="encuentranos" className="py-20 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="font-heading text-[var(--h2)]">Encuéntranos</h2>
                <p className="opacity-70 mt-2">Estamos en un enclave privilegiado de la Sierra de Gredos, el punto de partida perfecto para tu aventura o tu descanso.</p>
                <div className="mt-6 space-y-2 text-sm">
                    <p><strong>Dirección:</strong> P.º Arturo Duperier, 55, 05470 Pedro Bernardo, Ávila</p>
                    <p><strong>Email:</strong> <a href="mailto:info@hostalelcerro.com" className="underline">info@hostalelcerro.com</a></p>
                    <div className="flex flex-wrap items-baseline gap-x-2">
                        <p><strong>Teléfonos:</strong></p>
                        <div className="flex flex-wrap items-center gap-x-2">
                            <a href="tel:920389103" className="underline">920389103</a>
                            <span className="opacity-50 select-none">|</span>
                            <a href="tel:620555505" className="underline">620555505</a>
                            <span className="opacity-50 select-none">|</span>
                            <a href="tel:607733360" className="underline">607733360</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.989299404245!2d-4.921496623348659!3d40.20846507148566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3ff0e8a75e2a27%3A0xc47e30567e90f209!2sP.%C2%BA%20Arturo%20Duperier%2C%2055%2C%2005470%20Pedro%20Bernardo%2C%20%C3%81vila%2C%20Spain!5e0!3m2!1sen!2sus!4v1718886567228!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de localización del Hostal El Cerro"
                  >
                </iframe>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-bg)]">
          <TestimonialMarquee />
      </section>
    </div>
  );
};