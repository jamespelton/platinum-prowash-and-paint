import { FaPhone, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text" data-aos="fade-up">
            <h1 className="hero-title">
              Make Your Home's Exterior <span className="highlight">Look New Again</span>
            </h1>
            <p className="hero-subtitle">
              Professional pressure washing, soft-wash cleaning, and painting services in Lincoln & Beatrice, NE.
              Over 12 years of trusted service with honest pricing and guaranteed satisfaction.
            </p>
            <div className="hero-features">
              <div className="feature-badge">
                <span className="badge-icon">✓</span>
                <span>12+ Years Experience</span>
              </div>
              <div className="feature-badge">
                <span className="badge-icon">✓</span>
                <span>Up-Front Pricing</span>
              </div>
              <div className="feature-badge">
                <span className="badge-icon">✓</span>
                <span>Emergency Services Available</span>
              </div>
            </div>
            <div className="hero-cta">
              <button onClick={scrollToContact} className="btn btn-primary btn-large">
                <FaEnvelope />
                Get Your Free Estimate
              </button>
              <a href="tel:5177557966" className="btn btn-secondary btn-large">
                <FaPhone />
                Call (517) 755-7966
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
