import SafeImage from './SafeImage';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">&ldquo;{content}&rdquo;</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
          <SafeImage
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
            fallback="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
          />
        </div>
        <div>
          <div className="font-bold text-gray-800">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

