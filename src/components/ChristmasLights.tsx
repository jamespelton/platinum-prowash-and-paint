import { useState } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight, FaSnowflake, FaPhone } from 'react-icons/fa'
import { PHONE_NUMBER, PHONE_NUMBER_RAW } from '../constants'
import './ChristmasLights.css'

const ChristmasLights = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: '/images/christmas-lights/christmas_lights1.png',
      alt: 'Professional Christmas lights on home exterior'
    },
    {
      src: '/images/christmas-lights/christmas_lights2.png',
      alt: 'Holiday lighting installation with warm white lights'
    },
    {
      src: '/images/christmas-lights/christmas_lights3.png',
      alt: 'Festive Christmas light display on residential property'
    },
    {
      src: '/images/christmas-lights/christmas_lights4.png',
      alt: 'RGB holiday lights creating colorful display'
    },
    {
      src: '/images/christmas-lights/christmas_lights5.png',
      alt: 'Two-story home decorated with Christmas lights'
    },
    {
      src: '/images/christmas-lights/christmas_lights6.png',
      alt: 'Complete holiday lighting package on large home'
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
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <section id="christmas-lights" className="christmas-lights">
      <div className="christmas-bg">
        <FaSnowflake className="snowflake s1" />
        <FaSnowflake className="snowflake s2" />
        <FaSnowflake className="snowflake s3" />
        <FaSnowflake className="snowflake s4" />
        <FaSnowflake className="snowflake s5" />
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="christmas-badge">
            <FaSnowflake /> Seasonal Service
          </span>
          <h2 className="section-title text-white">Christmas Light Installation</h2>
          <p className="section-subtitle text-white" style={{ opacity: 0.9 }}>
            Make your home the brightest on the block! Professional installation, maintenance, and removal so you can enjoy the holiday magic without the hassle.
          </p>
        </div>

        <div className="christmas-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="christmas-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="christmas-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>

        <div className="christmas-cta" data-aos="fade-up">
          <h3>Book Your Holiday Light Installation</h3>
          <p>Limited spots available for the holiday season. Reserve early!</p>
          <a href={`tel:${PHONE_NUMBER_RAW}`} className="btn btn-primary btn-large">
            <FaPhone /> Call {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="christmas-lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <FaTimes />
          </button>

          <button
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <button
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ChristmasLights
