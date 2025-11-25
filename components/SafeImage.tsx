'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallback?: string;
}

export default function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  fallback = 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80',
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallback) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes || '100vw'}
        priority={priority}
        quality={85}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      sizes={sizes}
      priority={priority}
      quality={85}
      onError={handleError}
    />
  );
}



