import { Room, RoomCategory, Experience, Testimonial, Offer, BlogPost } from '../types';

export const roomCategories: RoomCategory[] = [
  { id: 'estandar', name: 'Estándar', slug: 'estandar', description: 'Nuestras acogedoras habitaciones estándar.' },
  { id: 'superior', name: 'Superior', slug: 'superior', description: 'Más espacio y detalles de lujo.' },
  { id: 'suite', name: 'Suite', slug: 'suite', description: 'La máxima expresión de confort y exclusividad.' },
];

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Doble Estándar',
    slug: 'doble-estandar',
    priceFrom: 124,
    surface: 22,
    maxOccupancy: 2,
    view: 'montaña',
    brief: 'Un refugio acogedor con serenas vistas al valle, perfecto para una escapada de relax y confort.',
    description: 'Despierta con la tranquila belleza del valle desde tu ventana. Esta habitación combina un diseño moderno y funcional con materiales naturales, creando un ambiente de calma y confort. Perfecta para parejas que buscan desconectar y disfrutar de la esencia de Gredos.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama de Matrimonio', 'Ducha efecto lluvia', 'Amenities ecológicos'],
    mainImage: '/img/habitaciones/doble-estandar/doble standar1_small.webp',
    gallery: [
      '/img/habitaciones/doble-estandar/doble standar2_large.webp',
      '/img/habitaciones/doble-estandar/doble standar3_large.webp'
    ],
    isFeatured: false,
    order: 10,
    category: 'estandar'
  },
  {
    id: 2,
    name: 'Doble Superior con Balcón',
    slug: 'doble-superior-balcon',
    priceFrom: 127,
    surface: 28,
    maxOccupancy: 2,
    view: 'montaña',
    brief: 'Amplitud y diseño con un balcón privado para sentir la brisa de la sierra y disfrutar de momentos únicos.',
    description: 'Eleva tu estancia en esta habitación superior, donde el espacio y la luz son protagonistas. Sal a tu balcón privado para respirar el aire puro de Gredos, tomar un café por la mañana o disfrutar de una copa de vino al atardecer. Un rincón perfecto para la contemplación y el descanso.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama King Size', 'Balcón privado', 'Cafetera Nespresso', 'Amenities de lujo'],
    mainImage: '/img/habitaciones/doble-superior-balcon/Doble superior con balcon1_small.webp',
    gallery: [
      '/img/habitaciones/doble-superior-balcon/Doble superior con balcon2_large.webp',
      '/img/habitaciones/doble-superior-balcon/Doble superior con balcon3_large.webp'
    ],
    isFeatured: false,
    order: 9,
    category: 'superior'
  },
  {
    id: 3,
    name: 'Doble Superior con Hidromasaje',
    slug: 'doble-superior-hidromasaje',
    priceFrom: 135,
    surface: 30,
    maxOccupancy: 2,
    view: 'piscina',
    brief: 'Combina el confort superior con el lujo de una bañera de hidromasaje privada para una relajación total.',
    description: 'Sumérgete en un oasis de bienestar sin salir de tu habitación. Este espacio superior está diseñado para el relax, culminando en una espectacular bañera de hidromasaje. Libera tensiones tras un día explorando Gredos y déjate envolver por una atmósfera de pura calma.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama King Size', 'Bañera de hidromasaje', 'Albornoz y zapatillas', 'Minibar de cortesía'],
    mainImage: '/img/habitaciones/doble-superior-hidromasaje/Doble superior hidromasaje1_small.webp',
    gallery: [
      '/img/habitaciones/doble-superior-hidromasaje/Doble superior hidromasaje2_large.webp',
      '/img/habitaciones/doble-superior-hidromasaje/Doble superior hidromasaje3_large.webp',
      '/img/habitaciones/doble-superior-hidromasaje/Doble superior hidromasaje4_large.webp'
    ],
    isFeatured: true,
    order: 3,
    category: 'superior'
  },
  {
    id: 4,
    name: 'Doble Superior Panorámica',
    slug: 'doble-superior-panoramica',
    priceFrom: 140,
    surface: 32,
    maxOccupancy: 2,
    view: 'montaña',
    brief: 'Vistas espectaculares del pueblo y las montañas desde un gran ventanal, con terraza privada y jacuzzi.',
    description: 'Contempla Gredos como nunca antes. Un impresionante ventanal panorámico inunda la habitación de luz y te regala vistas inolvidables del pueblo y las cumbres. Sal a tu terraza privada para sentirte parte del paisaje y relájate en el jacuzzi del baño. Una experiencia visual y sensorial única.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama King Size', 'Terraza privada', 'Ventanal panorámico', 'Baño con Jacuzzi'],
    mainImage: '/img/habitaciones/doble-superior-panoramica/Doble superior panorámica con terraza1_small.webp',
    gallery: [
      '/img/habitaciones/doble-superior-panoramica/Doble superior panorámica con terraza2_large.webp',
      '/img/habitaciones/doble-superior-panoramica/Doble superior panorámica con terraza3_large.webp',
      '/img/habitaciones/doble-superior-panoramica/Doble superior panorámica con terraza4_large.webp',
      '/img/habitaciones/doble-superior-panoramica/Doble superior panorámica con terraza5_large.webp'
    ],
    isFeatured: false,
    order: 8,
    category: 'superior'
  },
  {
    id: 5,
    name: 'Doble Ejecutiva con Terraza',
    slug: 'doble-ejecutiva-terraza',
    priceFrom: 145,
    surface: 35,
    maxOccupancy: 2,
    view: 'piscina',
    brief: 'Elegancia y confort con una terraza privada sobre una de las calles principales y un gran jacuzzi para relajarse.',
    description: 'Diseñada para quienes buscan un extra de sofisticación, esta habitación cuenta con una terraza privada que se asoma a la vida del pueblo. En el interior, el lujo continúa con un espacioso baño equipado con un gran jacuzzi, el lugar ideal para desconectar después de una jornada lúdica.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama King Size', 'Terraza privada', 'Jacuzzi', 'Escritorio de trabajo'],
    mainImage: '/img/habitaciones/doble-ejecutiva-terraza/Doble ejecutiva con terraza1_small.webp',
    gallery: [
      '/img/habitaciones/doble-ejecutiva-terraza/Doble ejecutiva con terraza2_large.webp',
      '/img/habitaciones/doble-ejecutiva-terraza/Doble ejecutiva con terraza3_large.webp',
      '/img/habitaciones/doble-ejecutiva-terraza/Doble ejecutiva con terraza4_large.webp'
    ],
    isFeatured: false,
    order: 7,
    category: 'superior'
  },
  {
    id: 6,
    name: 'Suite',
    slug: 'suite',
    priceFrom: 165,
    surface: 45,
    maxOccupancy: 2,
    view: 'montaña',
    brief: 'El encanto de un ático con un amplio dormitorio conectado a una terraza y detalles como un reproductor de DVD.',
    description: 'Nuestra suite más especial te espera bajo un techo abuhardillado con encanto. Un espacio amplio y diáfano que fluye hacia una magnífica terraza. Para tus momentos de ocio, dispone de un reproductor de DVD con una cuidada selección de películas. Es el refugio perfecto para una estancia memorable y llena de confort.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama Super King Size', 'Terraza privada', 'Reproductor de DVD', 'Zona de estar'],
    mainImage: '/img/habitaciones/suite/Suite1_small.webp',
    gallery: [
      '/img/habitaciones/suite/Suite2_large.webp',
      '/img/habitaciones/suite/Suite3_large.webp',
      '/img/habitaciones/suite/Suite4_large.webp',
      '/img/habitaciones/suite/Suite5_large.webp'
    ],
    isFeatured: false,
    order: 6,
    category: 'suite'
  },
  {
    id: 7,
    name: 'Habitación Moderna con Terraza',
    slug: 'habitacion-moderna-terraza',
    priceFrom: 129,
    surface: 28,
    maxOccupancy: 2,
    view: 'montaña',
    brief: 'Diseño contemporáneo, terraza con vistas a la montaña y una ducha de cromoterapia para una experiencia relajante.',
    description: 'Una habitación que fusiona diseño de vanguardia y bienestar. Disfruta de una cama de matrimonio grande y una terraza privada con vistas a la imponente montaña. El baño es un santuario en sí mismo, con una ducha de cromoterapia que crea una atmósfera de relajación a través del color y la luz.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama de Matrimonio Grande', 'Terraza con vistas a la montaña', 'Ducha de cromoterapia'],
    mainImage: '/img/habitaciones/habitacion-moderna-terraza/Moderna1_small.webp',
    gallery: [
      '/img/habitaciones/habitacion-moderna-terraza/Moderna2_large.webp',
      '/img/habitaciones/habitacion-moderna-terraza/Moderna3_large.webp',
      '/img/habitaciones/habitacion-moderna-terraza/Moderna4_large.webp',
      '/img/habitaciones/habitacion-moderna-terraza/Moderna5_large.webp',
      '/img/habitaciones/habitacion-moderna-terraza/Moderna6_large.webp'
    ],
    isFeatured: false,
    order: 5,
    category: 'superior'
  },
  {
    id: 8,
    name: 'Doble Superior Adaptada con Terraza',
    slug: 'doble-superior-adaptada-terraza',
    priceFrom: 129,
    surface: 30,
    maxOccupancy: 2,
    view: 'montaña',
    brief: 'Accesibilidad sin renunciar al estilo, con cama con dosel, terraza con vistas y diseño de fácil acceso.',
    description: 'Hemos diseñado esta habitación para ofrecer la máxima comodidad y accesibilidad. Espacios amplios y un diseño cuidado se combinan con detalles de lujo, como una cama grande de matrimonio con dosel y una terraza con vistas a la montaña. El confort y la independencia están garantizados.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama de Matrimonio con Dosel', 'Terraza accesible', 'Baño adaptado'],
    mainImage: '/img/habitaciones/doble-superior-adaptada-terraza/Doble superior con terraza adaptada1_small.webp',
    gallery: [
        '/img/habitaciones/doble-superior-adaptada-terraza/Doble superior con terraza adaptada2_large.webp',
        '/img/habitaciones/doble-superior-adaptada-terraza/Doble superior con terraza adaptada3_large.webp',
        '/img/habitaciones/doble-superior-adaptada-terraza/Doble superior con terraza adaptada4_large.webp',
        '/img/habitaciones/doble-superior-adaptada-terraza/Doble superior con terraza adaptada5_large.webp'
    ],
    isFeatured: false,
    order: 4,
    category: 'superior'
  },
  {
    id: 9,
    name: 'Suite Panorámica',
    slug: 'suite-panoramica',
    priceFrom: 165,
    surface: 50,
    maxOccupancy: 2,
    view: 'montaña',
    brief: 'Cama extragrande, amplia terraza con vistas únicas y el lujo de elegir entre bañera de hidromasaje y ducha.',
    description: 'La joya de la corona. La Suite Panorámica ofrece una experiencia inmersiva en el paisaje de Gredos. Equipada con una cama extragrande y una amplia terraza, sus vistas únicas del pueblo y las montañas harán tu estancia inolvidable. El baño, un templo de relajación, cuenta con bañera de hidromasaje y un plato de ducha independiente.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama Extragrande', 'Amplia terraza', 'Bañera hidromasaje', 'Ducha independiente'],
    mainImage: '/img/habitaciones/suite-panoramica/Suite Panorámica1_small.webp',
    gallery: [
        '/img/habitaciones/suite-panoramica/Suite Panorámica2_large.webp',
        '/img/habitaciones/suite-panoramica/Suite Panorámica3_large.webp',
        '/img/habitaciones/suite-panoramica/Suite Panorámica4_large.webp',
        '/img/habitaciones/suite-panoramica/Suite Panorámica5_large.webp'
    ],
    isFeatured: true,
    order: 1,
    category: 'suite'
  },
  {
    id: 10,
    name: 'Suite Junior',
    slug: 'suite-junior',
    priceFrom: 165,
    surface: 40,
    maxOccupancy: 2,
    view: 'montaña',
    brief: 'Una suite con cama extragrande, terraza y una mágica ducha con cristal translúcido que redefine el espacio.',
    description: 'La Suite Junior redefine el concepto de espacio y luz. Equipada con una cama extragrande y una terraza con vistas privilegiadas, su elemento más sorprendente es la ducha. Un cristal translúcido, que puedes controlar manual o automáticamente, te permite integrar visualmente el baño con el dormitorio, creando una sensación de amplitud y sorpresa que impacta a nuestros clientes.',
    services: ['Wi-Fi alta velocidad', 'Smart TV 4K', 'Cama Extragrande', 'Amplia terraza', 'Ducha con cristal translúcido inteligente'],
    mainImage: '/img/habitaciones/suite-junior/Suite Junior1_small.webp',
    gallery: [
      '/img/habitaciones/suite-junior/Suite Junior2_large.webp',
      '/img/habitaciones/suite-junior/Suite Junior3_large.webp'
    ],
    isFeatured: true,
    order: 2,
    category: 'suite'
  }
];

export const offers: Offer[] = [
  { id: 1, name: 'Anticípate 15 %', slug: 'anticipate-15', discountType: 'percentage', discountValue: 15, conditions: 'Reservando con más de 30 días de antelación. No reembolsable.', startDate: '2024-01-01', endDate: '2025-12-31', image: 'https://picsum.photos/seed/offer1/600/400' },
  { id: 2, name: 'Entre semana −10 %', slug: 'entre-semana-10', discountType: 'percentage', discountValue: 10, conditions: 'Válido para estancias de domingo a jueves. Estancia mínima de 2 noches.', startDate: '2024-01-01', endDate: '2025-12-31', image: 'https://picsum.photos/seed/offer2/600/400' },
  { id: 3, name: 'Escapada Spa', slug: 'escapada-spa', discountType: 'amount', discountValue: 50, conditions: 'Incluye estancia de 2 noches en Suite Spa y un tratamiento de 60 minutos para dos.', startDate: '2024-01-01', endDate: '2025-12-31', image: 'https://picsum.photos/seed/offer3/600/400' },
];

export const experiences: Experience[] = [
  { 
    id: 1, 
    name: 'Senderismo: Corazón de Gredos', 
    slug: 'senderismo-corazon-gredos', 
    summary: 'Embárcate en rutas míticas como el ascenso a la Laguna Grande o descubre cascadas secretas. Gredos a tus pies.', 
    description: 'Desde el hostal, tienes acceso a una red de senderos que serpentean por la sierra. Desafía tus límites con el trekking glaciar a la Laguna Grande, un paisaje que te dejará sin aliento, o busca la belleza serena de parajes como la Cascada del Purgatorio y el charco del Hornillo. Hay una ruta para cada nivel, esperando ser descubierta.', 
    image: '/img/experiencias/senderismo-corazon-gredos-large.webp' 
  },
  { 
    id: 2, 
    name: 'Pueblos con Encanto', 
    slug: 'pueblos-con-encanto', 
    summary: 'Explora la arquitectura tradicional de Candeleda, Guisando y la histórica Ruta de las 5 Villas.', 
    description: 'Viaja en el tiempo recorriendo las calles empedradas de los pueblos blancos del Valle del Tiétar. Descubre Candeleda y su encanto medieval, admira la arquitectura popular de Guisando, o sumérgete en la historia a través de la Ruta de las 5 Villas. Cada rincón cuenta una historia.', 
    image: '/img/experiencias/pueblos-con-encanto-large.webp'
  },
  { 
    id: 3, 
    name: 'Gredos desde el Cielo', 
    slug: 'gredos-desde-cielo', 
    summary: 'Siente la emoción de volar en parapente o ala delta sobre los valles y cumbres de la sierra.', 
    description: 'Gracias a sus magníficas laderas y excelentes condiciones térmicas, Gredos es un paraíso para los amantes del vuelo libre. Despega y experimenta una sensación de libertad absoluta mientras contemplas el paisaje a vista de pájaro. Una aventura inolvidable.', 
    image: '/img/experiencias/gredos-desde-cielo-large.webp'
  },
  { 
    id: 4, 
    name: 'Santuarios de Fauna', 
    slug: 'santuarios-fauna', 
    summary: 'Descubre la rica avifauna desde "hides" de observación o sumérgete en el mundo de las abejas en el Aula-Museo.', 
    description: 'Gredos es un hervidero de vida. Para los ornitólogos, los "hides" de Navarredonda ofrecen una oportunidad única para observar aves en su hábitat. Y para una experiencia familiar fascinante, el Aula-Museo Abejas del Valle te desvela los secretos de la apicultura.', 
    image: '/img/experiencias/santuarios-fauna-large.webp'
  },
  { 
    id: 5, 
    name: 'Rutas a Caballo', 
    slug: 'rutas-a-caballo', 
    summary: 'Recorre veredas inhóspitas y caminos históricos a lomos de un caballo, una forma diferente de sentir Gredos.', 
    description: 'Conecta con la naturaleza de una manera más profunda. Las rutas a caballo te llevan por vías de tierra y veredas de montaña, explorando rincones de la sierra que son inaccesibles de otra forma. Una experiencia que combina aventura y tranquilidad.', 
    image: '/img/experiencias/rutas_a_caballo_large.webp'
// NOTA: He usado la URL 'rutas_a_caballo_large.webp' como la subiste.
  },
  { 
    id: 6, 
    name: 'Aventura y Adrenalina', 
    slug: 'aventura-adrenalina', 
    summary: 'Libera estrés con una partida de Paintball o explora los encinares de Robledoso y el monumento megalítico de Cantogordo.', 
    description: 'Si buscas una dosis de adrenalina, organiza una partida de Paintball con amigos para luchar contra el estrés. O si prefieres un paseo tranquilo con un toque de misterio, los encinares de Robledoso y el monumento megalítico de Cantogordo te esperan.', 
    image: '/img/experiencias/aventura-adrenalina-large.webp'
  },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: 'Juan Pérez Garnes', origin: 'España', text: 'Un 10! Hostal regentado por dos hermanos espectaculares, gente agradable, buen servicio, habitación espectacular, comida de lujo( solo os digo que vayáis con hambre), spa genial... creo que no me quedan adjetivos. Si queréis desconectar, estar relajados, comer bien, disfrutar de un paisaje y terraza maravillosos, os lo recomiendo', rating: 5, date: '2024-08-05' },
  { id: 2, name: 'María Jose Romero Peinado', origin: 'España', text: 'Un lugar maravilloso para desconectar. La habitación una maravilla, súper bonita y decorada con mucho gusto con unas vistas insuperables, los despertares han sido un lujo con ese ventanal viendo la cascada. Nos hemos sentido muy cómodos mi marido y yo sobre todo gracias a la amabilidad de Cesar siempre pendiente de todo. En el restaurante se come a buen precio y muy rico todo, lo recomiendo al 100 x 100.', rating: 5, date: '2024-08-02' },
  { id: 3, name: 'Rocio Toto Mora', origin: 'España', text: 'Espectacular! Las habitaciones, el servicio, el entorno, el Spa, la piscina... superó todas nuestras expectativas y sin duda vamos a repetirlo. Lo que más nos gustó fue su atención, negocio familiar con muy buen ambiente 🤩 obligatorio probar VINACHE.', rating: 5, date: '2024-07-28' },
  { id: 4, name: 'Clara María Lopez', origin: 'España', text: 'Un lugar encantador, una tranquilidad inmensamente agradable, el trato y la atención del dueños es excelente, la cocina de merecerse una estrella Michelin. Las instalaciones preciosas y las vistas te dejan sin palabras, un ambiente agradable y una tranquilizas inmejorable. Volveré.', rating: 5, date: '2024-07-25' },
  { id: 5, name: 'Pilar Milán', origin: 'España', text: 'Un sitio genial para desconectar y disfrutar. El hostal es estupendo, de mucha categoría. El servicio excelente, todos super amables y la comida riquísima. La piscina y el spa son espectaculares y el pueblo tiene mucho encanto. Volveremos sin duda.', rating: 5, date: '2024-07-20' },
  { id: 6, name: 'Azucena Gómez', origin: 'España', text: 'Ha superado nuestras expectativas! Lugar increíble, hotel precioso con vistas espectaculares, habitaciones muy limpias y modernas. El spa es un plus. La comida del restaurante incrible y buen trato por parte del personal. Repetiremos seguro!', rating: 5, date: '2024-07-18' },
];

// FIX: Added blogPosts data to resolve error in BlogPage.tsx
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: '5-rutas-imprescindibles-en-gredos',
    title: '5 Rutas de Senderismo Imprescindibles en Gredos',
    summary: 'Descubre los paisajes más espectaculares de la Sierra de Gredos con nuestra selección de rutas para todos los niveles. Prepara tus botas y tu cámara.',
    headerImage: 'https://picsum.photos/seed/blog1/1200/800',
    categories: ['Naturaleza', 'Actividades'],
    date: '2024-08-10',
    author: 'Equipo El Cerro',
  },
  {
    id: 2,
    slug: 'gastronomia-gredos-sabores-tradicion',
    title: 'Gastronomía de Gredos: Sabores con Tradición',
    summary: 'Un viaje culinario por los productos y recetas que definen el alma de Gredos. Desde las judías de El Barco hasta el chuletón de Ávila.',
    headerImage: 'https://picsum.photos/seed/blog2/1200/800',
    categories: ['Gastronomía'],
    date: '2024-07-22',
    author: 'Chef Vinache',
  },
  {
    id: 3,
    slug: 'beneficios-escapada-spa-montana',
    title: 'Los Beneficios de una Escapada de Spa en la Montaña',
    summary: 'Combinar el aire puro de la sierra con tratamientos de bienestar es la fórmula perfecta para resetear cuerpo y mente. Te contamos por qué.',
    headerImage: 'https://picsum.photos/seed/blog3/1200/800',
    categories: ['Bienestar', 'Spa'],
    date: '2024-07-05',
    author: 'Equipo El Cerro',
  },
  {
    id: 4,
    slug: 'guia-observacion-estrellas-gredos',
    title: 'Guía para la Observación de Estrellas en Gredos (Destino Starlight)',
    summary: 'Te damos las claves para disfrutar de uno de los cielos nocturnos más limpios de Europa. Constelaciones, mitología y consejos prácticos.',
    headerImage: 'https://picsum.photos/seed/blog4/1200/800',
    categories: ['Actividades', 'Naturaleza'],
    date: '2024-06-18',
    author: 'Equipo El Cerro',
  },
];