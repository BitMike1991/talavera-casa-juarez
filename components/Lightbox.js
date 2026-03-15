import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ src, alt, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Prev */}
      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Next */}
      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-[90vw] h-[85vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt || ''}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      {/* Caption */}
      {alt && (
        <p className="absolute bottom-6 left-0 right-0 text-center font-body text-sm text-white/70">
          {alt}
        </p>
      )}
    </div>
  );
}
