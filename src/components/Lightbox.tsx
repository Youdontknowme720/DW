import { useState, useEffect } from 'react';

interface LightboxProps {
  images: string[];
  alt: string;
}

export default function Lightbox({ images, alt }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="collage-grid">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="collage-item" 
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
          >
            <img src={img} alt={`${alt} ${index + 1}`} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Schließen">
            &times;
          </button>
          
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={prevImage} 
            aria-label="Vorheriges Bild"
          >
            &#10094;
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentIndex]} 
              alt={`${alt} ${currentIndex + 1}`} 
            />
            <p className="lightbox-counter">{currentIndex + 1} / {images.length}</p>
          </div>
          
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={nextImage} 
            aria-label="Nächstes Bild"
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
