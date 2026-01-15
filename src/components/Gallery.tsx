import { useState } from 'react'
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Gallery.css'

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      src: '/images/gallery/roof-before-after.jpg',
      alt: 'Roof cleaning before and after comparison',
      label: 'Roof Cleaning'
    },
    {
      src: '/images/gallery/deck-stained-showcase.jpg',
      alt: 'Beautiful stained deck with brick accents',
      label: 'Deck Staining'
    },
    {
      src: '/images/gallery/house-before-algae.jpg',
      alt: 'House siding with algae before cleaning',
      label: 'Algae Removal'
    },
    {
      src: '/images/gallery/house-clean-lakehouse.jpg',
      alt: 'Clean painted lake house',
      label: 'House Washing'
    },
    {
      src: '/images/gallery/deck-before-1.jpg',
      alt: 'Weathered deck before restoration',
      label: 'Deck Restoration'
    },
    {
      src: '/images/gallery/deck-after-clean.jpg',
      alt: 'Cleaned deck after pressure washing',
      label: 'Pressure Washing'
    },
    {
      src: '/images/gallery/house-before-peeling.jpg',
      alt: 'House siding restoration project',
      label: 'Siding Restoration'
    },
    {
      src: '/images/gallery/commercial-building.jpg',
      alt: 'Commercial building professional painting',
      label: 'Commercial Work'
    },
    {
      src: '/images/gallery/holiday-lights-1.jpg',
      alt: 'Professional holiday lighting on stone home',
      label: 'Holiday Lighting'
    },
    {
      src: '/images/gallery/holiday-lights-2.jpg',
      alt: 'Holiday lights on large estate home',
      label: 'Holiday Lighting'
    },
    {
      src: '/images/gallery/holiday-lights-3.jpg',
      alt: 'Two-story home with holiday lights and driveway luminaries',
      label: 'Holiday Lighting'
    },
    {
      src: '/images/gallery/holiday-lights-4.jpg',
      alt: 'Colorful RGB holiday lights on ranch home',
      label: 'Holiday Lighting'
    },
    {
      src: '/images/gallery/holiday-lights-5.jpg',
      alt: 'Multi-colored holiday lights on large two-story home',
      label: 'Holiday Lighting'
    }
  ]

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Work Speaks for Itself</h2>
          <p className="section-subtitle">
            See the dramatic difference professional cleaning, restoration, and painting can make for your property
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <div className="gallery-overlay">
                <FaSearchPlus className="gallery-icon" />
                <span className="gallery-label">{image.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>

          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>

          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <span className="lightbox-label">{galleryImages[currentIndex].label}</span>
              <span className="lightbox-counter">
                {currentIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
