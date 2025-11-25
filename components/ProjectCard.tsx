'use client';

import SafeImage from './SafeImage';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <SafeImage
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors"
              aria-label="Ver proyecto en vivo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-lg transition-colors"
              aria-label="Ver código en GitHub"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

