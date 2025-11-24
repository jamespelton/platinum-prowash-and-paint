import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer M.',
      location: 'Lincoln, NE',
      rating: 5,
      text: 'ProWash transformed our weathered deck into something that looks brand new. Bryce and his team were professional, on time, and the price was exactly what they quoted. No surprises, just excellent work. Highly recommend!'
    },
    {
      name: 'Michael T.',
      location: 'Beatrice, NE',
      rating: 5,
      text: 'We had our entire house painted by ProWash and couldn\'t be happier. They prepped everything thoroughly, protected our landscaping, and cleaned up perfectly afterward. The attention to detail was impressive. Worth every penny.'
    },
    {
      name: 'Sarah K.',
      location: 'Lincoln, NE',
      rating: 5,
      text: 'Called ProWash for pressure washing our driveway and sidewalks. The difference is night and day! They removed years of dirt and stains. Communication was great from start to finish, and they even gave us tips on maintaining it. Will definitely use them again.'
    },
    {
      name: 'David R.',
      location: 'Beatrice, NE',
      rating: 5,
      text: 'Honest, reliable, and skilled. ProWash tackled our old brick patio that other companies said was beyond help. They brought it back to life with their soft-wash technique. If you want quality work and fair pricing, call ProWash.'
    }
  ]

  return (
    <section id="testimonials" className="testimonials bg-light">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it—hear from homeowners who've experienced the ProWash difference
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>
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
