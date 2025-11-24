import './Services.css'

const Services = () => {
  const services = [
    {
      image: '/images/services/house-washing.jpg',
      title: 'Low-Pressure House Washing',
      description: 'Safe, effective cleaning that removes dirt, mold, mildew, and algae from your siding without damage. Our soft-wash system protects your home while giving it a like-new appearance.'
    },
    {
      image: '/images/services/window-cleaning.jpg',
      title: 'Window Cleaning',
      description: 'Crystal-clear windows inside and out. We remove buildup, streaks, and grime so natural light can shine through and your home looks fresh from the street.'
    },
    {
      image: '/images/services/concrete-cleaning.jpg',
      title: 'Concrete & Brick Cleaning',
      description: 'Professional cleaning for driveways, patios, sidewalks, and masonry. We blast away tough stains, oil spots, and weathering to restore your concrete and brick to their original look.'
    },
    {
      image: '/images/services/roof-cleaning.jpg',
      title: 'Soft-Wash Roof Cleaning',
      description: 'Non-pressure roof cleaning that safely removes black streaks, algae, and moss without harming your shingles. Extend your roof\'s life and instantly improve curb appeal.'
    },
    {
      image: '/images/services/painting.jpg',
      title: 'Exterior & Interior Painting',
      description: 'Give your property a fresh, clean look with professional painting. From houses and garages to decks and fences, we deliver smooth, even finishes that protect and beautify.'
    },
    {
      image: '/images/services/deck-staining.jpg',
      title: 'Deck & Fence Staining',
      description: 'Restore and protect your wood with expert staining and sealing. We prep, clean, and apply premium stains that bring out the grain and shield against weather and wear.'
    },
    {
      image: '/images/services/holiday-lighting.jpg',
      title: 'Holiday Lighting Installation',
      description: 'Make your home shine this holiday season. We professionally install, maintain, and remove Christmas lights so you can enjoy the festive glow without the hassle of ladders and tangled wires.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Professional Services</h2>
          <p className="section-subtitle">
            Comprehensive exterior cleaning, restoration, and painting for homes and businesses in Lincoln, Beatrice, and the surrounding areas
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
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
          <a href="tel:5177557966" className="btn btn-primary btn-large">
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
