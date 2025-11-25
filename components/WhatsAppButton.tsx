'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  const phoneNumber = '593xxxxxxxxxx'; // Reemplazar con número real de WhatsApp (formato: 593 + número sin 0 inicial)
  const message = 'Hola, me interesa conocer más sobre sus servicios.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 rounded-full shadow-xl transition-all transform hover:scale-110 z-40"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative w-8 h-8">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>
    </button>
  );
}

