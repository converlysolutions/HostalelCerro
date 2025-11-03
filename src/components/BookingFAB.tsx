
import React from 'react';
import { useApp } from '../App';
import { CalendarCheck } from 'lucide-react';

export const BookingFAB: React.FC = () => {
  const { openBookingModal } = useApp();

  return (
    <div>
      <div className="fixed bottom-0 right-0 p-4 z-40 block md:hidden">
        <button
          onClick={openBookingModal}
          className="w-full bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider shadow-lg hover:opacity-90 smooth-transition flex items-center justify-center space-x-2"
          aria-label="Reservar ahora"
        >
          <span>Reservar</span>
          <CalendarCheck size={20} />
        </button>
      </div>
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={openBookingModal}
          className="bg-[var(--color-accent)] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 smooth-transition"
          aria-label="Reservar ahora"
        >
          <CalendarCheck size={24} />
        </button>
      </div>
    </div>
  );
};
