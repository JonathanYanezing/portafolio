'use client';

import SafeImage from './SafeImage';
import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  onAddToCart?: (id: number) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
  onAddToCart,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <SafeImage
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fallback="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-all shadow-md"
          aria-label="Agregar a favoritos"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}
          />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">${price}</span>
          <button
            onClick={() => onAddToCart?.(id)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <ShoppingCart size={18} />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

