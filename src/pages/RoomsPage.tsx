
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { rooms, roomCategories } from '../data/seed';
import { Room } from '../types';
import { ChevronDown } from 'lucide-react';

const RoomCard: React.FC<{ room: Room }> = ({ room }) => (
    <Link to={`/habitaciones/${room.slug}`} className="group bg-[var(--color-cream)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl smooth-transition flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
            <img src={room.mainImage} alt={room.name} className="w-full h-full object-cover smooth-transition group-hover:scale-105" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-baseline">
                <h3 className="font-heading text-xl">{room.name}</h3>
                <p className="text-sm font-bold text-[var(--color-accent)]">Desde {room.priceFrom}€</p>
            </div>
            <p className="text-sm opacity-70 mt-2 flex-grow">{room.brief}</p>
            <div className="mt-4 text-sm font-bold text-[var(--color-accent)] group-hover:underline self-start">
                Ver detalles →
            </div>
        </div>
    </Link>
);


const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
};

const CustomSelect: React.FC<{
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}> = ({ options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideClick(wrapperRef, () => setIsOpen(false));
    
    const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

    return (
        <div className="relative font-body w-52" ref={wrapperRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-[var(--color-cream)] px-4 py-2.5 rounded-full text-sm font-medium flex justify-between items-center"
            >
                <span>{selectedLabel}</span>
                <ChevronDown size={18} className={`smooth-transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-[var(--color-cream)] rounded-xl shadow-lg z-10 overflow-hidden animate-fade-in-down">
                    <ul>
                        <li
                            onClick={() => { onChange('all'); setIsOpen(false); }}
                            className="px-4 py-2 text-sm hover:bg-[var(--color-accent)]/20 cursor-pointer"
                        >
                            {placeholder}
                        </li>
                        {options.map(option => (
                            <li
                                key={option.value}
                                onClick={() => { onChange(option.value); setIsOpen(false); }}
                                className={`px-4 py-2 text-sm hover:bg-[var(--color-accent)]/20 cursor-pointer ${value === option.value ? 'font-bold text-[var(--color-accent)]' : ''}`}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


export const RoomsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedView, setSelectedView] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('price-asc');

  const filteredRooms = rooms
    .filter(room => selectedCategory === 'all' || room.category === selectedCategory)
    .filter(room => selectedView === 'all' || room.view === selectedView)
    .sort((a, b) => {
      if (sortOrder === 'price-asc') {
        return a.priceFrom - b.priceFrom;
      }
      if (sortOrder === 'price-desc') {
        return b.priceFrom - a.priceFrom;
      }
      return a.order - b.order;
    });
  
  const categoryOptions = roomCategories.map(c => ({ value: c.id, label: c.name }));
  const viewOptions = [
    { value: 'montaña', label: 'Montaña' },
    { value: 'piscina', label: 'Piscina' }
  ];
  const sortOptions = [
      { value: 'price-asc', label: 'Precio (menor a mayor)' },
      { value: 'price-desc', label: 'Precio (mayor a menor)' }
  ]

  return (
    <div className="pt-20 bg-[var(--color-bg)] animate-fade-in">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
           <img src="https://i.postimg.cc/9Qps0KWL/Moderna1.jpg" alt="Habitación con vistas a la montaña" className="w-full h-full object-cover"/>
           <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[var(--h1)] leading-tight">Nuestras Habitaciones</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">Cada habitación es un santuario de calma y confort, diseñado para que conectes con la serenidad de Gredos.</p>
        </div>
      </section>

      {/* Filters and Rooms */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12 p-4 bg-[var(--color-bg)] rounded-2xl">
            <CustomSelect
                placeholder="Todas las categorías"
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
            />
            <CustomSelect
                placeholder="Todas las vistas"
                options={viewOptions}
                value={selectedView}
                onChange={setSelectedView}
            />
            <div className="md:ml-auto">
                 <CustomSelect
                    placeholder="Ordenar por"
                    options={sortOptions}
                    value={sortOrder}
                    onChange={setSortOrder}
                />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
