import { useState, useRef, useEffect } from 'react'
import { FaQuoteLeft, FaCheckCircle } from 'react-icons/fa'
import './BeforeAfterSlider.css'

interface ComparisonItem {
  before: string
  after: string
  label: string
  quote?: string
}

const BeforeAfterSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const comparisons: ComparisonItem[] = [
    {
      before: '/images/before-after/painting/before_paint2.jpg',
      after: '/images/before-after/painting/after_paint2.jpg',
      label: 'Exterior Painting'
    },
    {
      before: '/images/before-after/painting/before_paint3.jpg',
      after: '/images/before-after/painting/after_paint3.jpg',
      label: 'House Painting'
    },
    {
      before: '/images/before-after/painting/before_paint4.jpg',
      after: '/images/before-after/painting/after_paint4.jpg',
      label: 'Residential Painting'
    },
    {
      before: '/images/before-after/painting/before_paint5.jpg',
      after: '/images/before-after/painting/after_paint5.jpg',
      label: 'Home Transformation'
    },
    {
      before: '/images/before-after/pool/before_pool1.jpg',
      after: '/images/before-after/pool/after_pool1.jpg',
      label: 'Pool Deck Cleaning',
      quote: 'Professional, on-time, and fair pricing. The transformation was exactly what we were looking for.'
    }
  ]

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleGlobalMouseUp)
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp)
  }, [])

  // Reset slider position when changing images
  useEffect(() => {
    setSliderPosition(50)
  }, [activeIndex])

  return (
    <section id="before-after" className="before-after">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">See the Transformation</h2>
          <p className="section-subtitle">
            Drag the slider to compare before and after results from our painting and cleaning projects
          </p>
        </div>

        <div className="comparison-wrapper" data-aos="fade-up">
          <div
            ref={containerRef}
            className="comparison-container"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <img
              src={comparisons[activeIndex].after}
              alt="After"
              className="comparison-image after-image"
              draggable={false}
            />

            {/* Before Image (Clipped) */}
            <div
              className="before-wrapper"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={comparisons[activeIndex].before}
                alt="Before"
                className="comparison-image before-image"
                draggable={false}
              />
            </div>

            {/* Slider Handle */}
            <div
              className="slider-handle"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
            >
              <div className="slider-line"></div>
              <div className="slider-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8L22 12L18 16" />
                  <path d="M6 8L2 12L6 16" />
                </svg>
              </div>
              <div className="slider-line"></div>
            </div>

            {/* Labels */}
            <div className="comparison-labels">
              <span className="label-before">Before</span>
              <span className="label-after">After</span>
            </div>
          </div>

          {/* Project Label */}
          <div className="comparison-label">{comparisons[activeIndex].label}</div>

          {/* Featured Project Quote */}
          {comparisons[activeIndex].quote && (
            <div className="featured-quote" data-aos="fade-up">
              <FaQuoteLeft className="quote-icon" />
              <p className="quote-text">{comparisons[activeIndex].quote}</p>
              <div className="quote-attribution">
                <FaCheckCircle className="verified-icon" />
                <span>Featured Project</span>
              </div>
            </div>
          )}

          {/* Thumbnail Navigation */}
          <div className="comparison-thumbnails">
            {comparisons.map((item, index) => (
              <button
                key={index}
                className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.label}`}
              >
                <img src={item.after} alt={item.label} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterSlider
