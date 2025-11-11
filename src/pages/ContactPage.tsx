import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email) newErrors.email = 'El email es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El formato del email no es válido.';
    if (!formData.message) newErrors.message = 'El mensaje no puede estar vacío.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    setTimeout(() => {
      // Mock submission
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-24 bg-[var(--color-bg)]">
      <header className="text-center py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[var(--h1)]">Contacto y Ubicación</h1>
          <p className="mt-4 max-w-2xl mx-auto opacity-80">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Encuéntranos en el corazón de Gredos.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full bg-[var(--color-cream)] border border-transparent focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] rounded-lg p-3" required />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-[var(--color-cream)] border border-transparent focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] rounded-lg p-3" required />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Teléfono (opcional)</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[var(--color-cream)] border border-transparent focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] rounded-lg p-3" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-[var(--color-cream)] border border-transparent focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] rounded-lg p-3" required></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
              </div>
              <button type="submit" disabled={status === 'submitting'} className="mt-6 bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:opacity-90 smooth-transition disabled:opacity-50">
                {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              {status === 'success' && <p className="text-green-600 mt-4">¡Mensaje enviado con éxito! Te responderemos pronto.</p>}
              {status === 'error' && <p className="text-red-500 mt-4">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>}
            </form>
          </div>
          <div>
            <div className="h-96 bg-gray-200 rounded-2xl overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.989299404245!2d-4.921496623348659!3d40.20846507148566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3ff0e8a75e2a27%3A0xc47e30567e90f209!2sP.%C2%BA%20Arturo%20Duperier%2C%2055%2C%2005470%20Pedro%20Bernardo%2C%20%C3%81vila%2C%20Spain!5e0!3m2!1sen!2sus!4v1718886567228!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de localización">
              </iframe>
            </div>
            <h3 className="font-heading text-xl mb-2">Hostal El Cerro</h3>
            <p className="opacity-80">P.º Arturo Duperier, 55, 05470<br/>Pedro Bernardo, Ávila</p>
            <h3 className="font-heading text-xl mt-6 mb-2">Contacto Directo</h3>
            <p className="opacity-80">Email: <a href="mailto:info@hostalelcerro.com" className="underline">info@hostalelcerro.com</a></p>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <p className="opacity-80">Teléfonos:</p>
              <div className="flex flex-wrap items-center gap-x-2">
                <a href="tel:607733360" className="underline opacity-80">607733360</a>
                <span className="opacity-50 select-none">|</span>
                <a href="tel:620555505" className="underline opacity-80">620555505</a>
                <span className="opacity-50 select-none">|</span>
                <a href="tel:920389103" className="underline opacity-80">920389103</a>
              </div>
            </div>
            <p className="mt-4 font-bold text-sm text-[var(--color-accent)]">Recuerda: nuestro alojamiento es exclusivamente para adultos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};