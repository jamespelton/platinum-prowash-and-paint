import { FaHome, FaBuilding, FaCity } from 'react-icons/fa'
import { PHONE_NUMBER_RAW } from '../constants'
import './Services.css'

const Services = () => {
  const serviceCategories = [
    { icon: <FaHome />, label: 'Residential', description: 'Single-family homes' },
    { icon: <FaBuilding />, label: 'Commercial', description: 'Businesses & storefronts' },
    { icon: <FaCity />, label: 'Multi-Family', description: 'Apartments & HOAs' }
  ]

  const services = [
    {
      image: '/images/services/house-washing.jpg',
      title: 'Low-Pressure House Washing',
      description: 'Safe, effective cleaning that removes dirt, mold, mildew, and algae from your siding without damage. Our soft-wash system protects your home while giving it a like-new appearance.',
      categories: ['residential', 'multi-family']
    },
    {
      image: '/images/services/window-cleaning.jpg',
      title: 'Window Cleaning',
      description: 'Crystal-clear windows inside and out. We remove buildup, streaks, and grime so natural light can shine through and your home looks fresh from the street.',
      categories: ['residential', 'commercial', 'multi-family']
    },
    {
      image: '/images/services/concrete.jpg',
      title: 'Concrete & Brick Cleaning',
      description: 'Professional cleaning for driveways, patios, sidewalks, and masonry. We blast away tough stains, oil spots, and weathering to restore your concrete and brick to their original look.',
      categories: ['residential', 'commercial', 'multi-family']
    },
    {
      image: '/images/services/roof-cleaning.jpg',
      title: 'Soft-Wash Roof Cleaning',
      description: 'Non-pressure roof cleaning that safely removes black streaks, algae, and moss without harming your shingles. Extend your roof\'s life and instantly improve curb appeal.',
      categories: ['residential', 'multi-family']
    },
    {
      image: '/images/services/painting.jpg',
      title: 'Exterior & Interior Painting',
      description: 'Give your property a fresh, clean look with professional painting. From houses and garages to decks and fences, we deliver smooth, even finishes that protect and beautify.',
      categories: ['residential', 'commercial', 'multi-family']
    },
    {
      image: '/images/services/deck-staining.jpg',
      title: 'Deck & Fence Staining',
      description: 'Restore and protect your wood with expert staining and sealing. We prep, clean, and apply premium stains that bring out the grain and shield against weather and wear.',
      categories: ['residential']
    },
    {
      image: '/images/services/kitchen-exhaust.jpg',
      title: 'Kitchen Exhaust Cleaning',
      description: 'Commercial-grade kitchen exhaust hood and duct cleaning. We remove grease buildup to reduce fire hazards, improve air quality, and keep your kitchen compliant with safety codes.',
      categories: ['commercial']
    },
    {
      image: '/images/services/grout.jpg',
      title: 'Tile & Grout Cleaning',
      description: 'Deep cleaning and restoration for tile floors, showers, and backsplashes. We remove embedded dirt, mold, and stains to make your tile and grout look brand new again.',
      categories: ['residential', 'commercial', 'multi-family']
    },
    {
      image: '/images/services/gum-removal.jpg',
      title: 'Gum Removal',
      description: 'Professional gum removal for sidewalks, parking lots, and commercial spaces. We eliminate unsightly gum spots quickly and effectively without damaging your surfaces.',
      categories: ['commercial', 'multi-family']
    },
    {
      image: '/images/services/graffiti-removal.jpg',
      title: 'Graffiti & Stain Removal',
      description: 'Fast, effective removal of graffiti, vandalism, and stubborn stains from brick, concrete, and other surfaces. Restore your property\'s appearance and protect your investment.',
      categories: ['commercial', 'multi-family']
    },
    {
      image: '/images/before-after/pool/after_pool1.jpg',
      title: 'Pool Deck Cleaning',
      description: 'Keep your pool area safe and spotless. We clean pool decks, surrounding concrete, and tile to remove algae, mildew, and slippery buildup for a clean, inviting space.',
      categories: ['residential', 'multi-family']
    },
    {
      image: '/images/christmas-lights/christmas_lights1.jpg',
      title: 'Christmas Light Installation',
      description: 'Make your home shine this holiday season. We professionally install, maintain, and remove Christmas lights so you can enjoy the festive glow without the hassle of ladders and tangled wires.',
      categories: ['residential', 'commercial']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Professional Services</h2>
          <p className="section-subtitle">
            Comprehensive exterior cleaning, restoration, and painting for residential, commercial, and multi-family properties in Lincoln, Beatrice, and the surrounding Nebraska areas
          </p>
        </div>

        {/* Service Categories */}
        <div className="service-categories" data-aos="fade-up">
          {serviceCategories.map((cat, index) => (
            <div key={index} className="category-badge">
              <span className="category-icon">{cat.icon}</span>
              <div className="category-text">
                <span className="category-label">{cat.label}</span>
                <span className="category-desc">{cat.description}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 50}
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" loading="lazy" decoding="async" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta" data-aos="fade-up">
          <p className="cta-text">Ready to transform your property?</p>
          <a href={`tel:${PHONE_NUMBER_RAW}`} className="btn btn-primary btn-large">
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
