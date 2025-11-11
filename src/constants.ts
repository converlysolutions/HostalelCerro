import { NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#/habitaciones', label: 'Habitaciones' },
  { href: '#/spa-bienestar', label: 'Bienestar' },
  { href: '#/restaurante', label: 'Restaurante' },
  { href: '#/eventos', label: 'Celebraciones' },
  { href: '##explora-gredos', label: 'Actividades' },
  { href: '##encuentranos', label: 'Localización' },
  { href: '#/contacto', label: 'Contacto' },
];

export const BOOKING_URL = 'https://direct-book.com/properties/hostalelcerrodirect?locale=es&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=EUR&checkInDate=2025-10-29&checkOutDate=2025-10-30&trackPage=yes';