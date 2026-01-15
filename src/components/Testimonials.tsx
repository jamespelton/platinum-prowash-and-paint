import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa'
import { BUSINESS_NAME } from '../constants'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Verified Customer',
      location: 'Beatrice, NE',
      rating: 5,
      text: 'Bryce was very knowledgeable in his area of expertise. We appreciated the high quality of work and responsiveness.',
      verified: true
    }
  ]

  return (
    <section id="testimonials" className="testimonials bg-light">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it—hear from customers who've experienced the {BUSINESS_NAME} difference
          </p>
          <p className="testimonials-tagline">
            Serving Lincoln, Beatrice, and surrounding areas with integrity for over 12 years.
          </p>
        </div>

        <div className="testimonials-grid testimonials-single">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card featured"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>
              {testimonial.verified && (
                <div className="verified-badge">
                  <FaCheckCircle /> Verified Customer
                </div>
              )}
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.name}</div>
                <div className="author-location">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
