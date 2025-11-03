

import React from 'react';
import { useApp } from '../App';
import { X } from 'lucide-react';
// FIX: Import BOOKING_URL to use in the iframe.
import { BOOKING_URL } from '../constants';

export const BookingModal: React.FC = () => {
  // FIX: isBookingModalOpen and closeBookingModal are now available from context.
  const { isBookingModalOpen, closeBookingModal } = useApp();

  if (!isBookingModalOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
      onClick={closeBookingModal}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-[var(--color-bg)] rounded-2xl shadow-xl w-full max-w-4xl h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--color-text)]/10">
          <h2 className="font-heading text-xl">Realizar una reserva</h2>
          <button
            onClick={closeBookingModal}
            className="p-2 rounded-full hover:bg-[var(--color-surface)] smooth-transition"
            aria-label="Cerrar modal de reserva"
          >
            <X size={24} />
          </button>
        </div>
        {/* FIX: Replaced placeholder with an iframe for the booking engine. */}
        <div className="flex-grow p-1 overflow-y-auto rounded-b-2xl">
          <iframe
            src={BOOKING_URL}
            title="Motor de Reservas"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
