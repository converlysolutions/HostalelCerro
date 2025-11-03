
import React from 'react';

const ColorSwatch: React.FC<{ name: string; hex: string; varName: string }> = ({ name, hex, varName }) => (
  <div>
    <div className={`w-full h-24 rounded-lg bg-[var(${varName})] border border-black/10`}></div>
    <div className="mt-2">
      <p className="font-bold">{name}</p>
      <p className="text-sm opacity-70">{hex}</p>
      <p className="text-xs opacity-50 font-mono">{varName}</p>
    </div>
  </div>
);

export const StyleguidePage: React.FC = () => {
  return (
    <div className="pt-24 bg-[var(--color-bg)]">
      <header className="text-center py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[var(--h1)]">Styleguide</h1>
          <p className="mt-4 max-w-2xl mx-auto opacity-80">
            Componentes y tokens de diseño para Hostal El Cerro.
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {/* Colors */}
        <section>
          <h2 className="font-heading text-3xl border-b pb-2 mb-8">Colores</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ColorSwatch name="Primary" hex="#0F2A22" varName="--color-primary" />
            <ColorSwatch name="Background" hex="#F6F3EE" varName="--color-bg" />
            <ColorSwatch name="Text" hex="#0B0B0C" varName="--color-text" />
            <ColorSwatch name="Accent" hex="#C08A3E" varName="--color-accent" />
            <ColorSwatch name="Cream" hex="#FFF8F0" varName="--color-cream" />
          </div>
           <p className="text-sm mt-4 italic">El dark mode invierte los colores de fondo y texto, y ajusta el acento.</p>
        </section>

        {/* Typography */}
        <section>
          <h2 className="font-heading text-3xl border-b pb-2 mb-8">Tipografía</h2>
          <div>
            <p className="text-sm opacity-70 mb-2 font-body">Font: Fraunces / Size: clamp(2.4rem, 2.2vw + 1.6rem, 4.2rem)</p>
            <h1 className="font-heading text-[var(--h1)]">H1: Título Principal</h1>
          </div>
          <div className="mt-8">
            <p className="text-sm opacity-70 mb-2 font-body">Font: Fraunces / Size: clamp(2rem, 1.6vw + 1.2rem, 3.2rem)</p>
            <h2 className="font-heading text-[var(--h2)]">H2: Título de Sección</h2>
          </div>
           <div className="mt-8">
            <h3 className="font-heading text-3xl">H3: Título Terciario</h3>
            <h4 className="font-heading text-2xl mt-2">H4: Título Cuaternario</h4>
          </div>
          <div className="mt-8">
            <p className="text-sm opacity-70 mb-2 font-body">Font: Inter Tight / Size: clamp(1rem, 0.4vw + 0.9rem, 1.15rem)</p>
            <p className="font-body leading-relaxed max-w-2xl">
              Párrafo de cuerpo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
          </div>
        </section>
        
        {/* Buttons */}
        <section>
          <h2 className="font-heading text-3xl border-b pb-2 mb-8">Botones</h2>
          <div className="flex flex-wrap items-center gap-4">
             <button className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:opacity-90 smooth-transition">Botón Primario</button>
             <button className="bg-transparent border border-[var(--color-text)] px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] smooth-transition">Botón Secundario</button>
          </div>
        </section>
        
        {/* Form Elements */}
        <section>
            <h2 className="font-heading text-3xl border-b pb-2 mb-8">Formularios</h2>
            <div className="max-w-md space-y-4">
                 <div>
                  <label htmlFor="name-style" className="block text-sm font-medium mb-1">Campo de texto</label>
                  <input type="text" name="name-style" id="name-style" placeholder="Escribe aquí..." className="w-full bg-[var(--color-cream)] border border-transparent focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] rounded-lg p-3" />
                </div>
                 <div>
                  <label htmlFor="select-style" className="block text-sm font-medium mb-1">Selector</label>
                  <select id="select-style" className="w-full bg-[var(--color-cream)] border border-transparent focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] rounded-lg p-3">
                    <option>Opción 1</option>
                    <option>Opción 2</option>
                  </select>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};
