

import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { rooms } from '../data/seed';
import { useApp } from '../App';
import { Maximize, X, Check } from 'lucide-react';

const Lightbox: React.FC<{ images: string[]; startIndex: number; onClose: () => void }> = ({ images, startIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    
    return (
        <div className="fixed inset-0 bg-black/80 z-[110] flex items-center justify-center" onClick={onClose}>
            <button onClick={onClose} className="absolute top-4 right-4 text-white z-20"><X size={32}/></button>
            <div className="relative w-full h-full flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
                <button onClick={prevImage} className="absolute left-4 text-white p-2 bg-black/30 rounded-full">‹</button>
                <img src={images[currentIndex]} alt={`Vista de la habitación ${currentIndex + 1}`} className="max-w-[90vw] max-h-[90vh] object-contain"/>
                <button onClick={nextImage} className="absolute right-4 text-white p-2 bg-black/30 rounded-full">›</button>
            </div>
        </div>
    );
};


export const RoomDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openBookingModal } = useApp();
  const room = rooms.find(r => r.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!room) {
    return <Navigate to="/404" />;
  }
  
  const allImages = [room.mainImage, ...room.gallery];

  return (
    <div className="pt-20 bg-[var(--color-bg)]">
        {lightboxOpen && <Lightbox images={allImages} startIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />}
        {/* Header Section with CTA */}
        <div className="sticky top-20 bg-[var(--color-surface)] backdrop-blur-lg z-30 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                <div>
                    <h1 className="font-heading text-xl md:text-2xl">{room.name}</h1>
                    <p className="text-sm opacity-80">Desde <span className="font-bold">{room.priceFrom}€</span>/noche</p>
                </div>
                <button onClick={openBookingModal} className="bg-[var(--color-accent)] text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:opacity-90 smooth-transition">Reservar ahora</button>
            </div>
        </div>

        {/* Gallery */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="col-span-2 row-span-2 relative group cursor-pointer" onClick={() => openLightbox(0)}>
                    <img src={room.mainImage} alt={room.name} className="w-full h-full object-cover rounded-lg"/>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 smooth-transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Maximize size={48} className="text-white"/>
                    </div>
                </div>
                {room.gallery.map((img, index) => (
                    <div key={index} className="relative group cursor-pointer" onClick={() => openLightbox(index + 1)}>
                       <img src={img} alt={`Galería ${index+1}`} className="w-full h-full object-cover rounded-lg" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 smooth-transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                           <Maximize size={24} className="text-white"/>
                       </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Room Details */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="font-heading text-3xl">Un santuario de calma</h2>
                    <p className="mt-4 opacity-80 leading-relaxed">{room.description}</p>
                    
                    <h3 className="font-heading text-2xl mt-12 mb-6">Servicios incluidos</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {room.services.map(service => (
                            <li key={service} className="flex items-center">
                                <Check size={18} className="text-[var(--color-accent)] mr-3 flex-shrink-0" />
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-[var(--color-cream)] rounded-2xl p-6 sticky top-40">
                        <h3 className="font-heading text-2xl">Detalles</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><strong>Ocupación Máx.:</strong> {room.maxOccupancy} adultos</li>
                            <li><strong>Vistas:</strong> {room.view.charAt(0).toUpperCase() + room.view.slice(1)}</li>
                            <li><strong>Cama:</strong> {room.services.find(s => s.toLowerCase().includes('cama')) || 'Cama Doble'}</li>
                        </ul>
                        <button onClick={openBookingModal} className="w-full mt-6 bg-[var(--color-primary)] text-white dark:bg-[var(--color-accent)] dark:text-black py-3 rounded-full font-bold uppercase tracking-wider hover:opacity-90 smooth-transition">
                            Comprobar disponibilidad
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};