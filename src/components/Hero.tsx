import { FaPhone, FaStar, FaShieldAlt, FaMapMarkerAlt, FaArrowDown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Lincoln & Beatrice's Premier Exterior Specialists
            </motion.span>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Restore Your Home's
              <span className="highlight"> Brilliance</span>
              <span className="highlight-sub"> Instantly</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Professional pressure washing, soft-wash cleaning, painting & holiday lighting services.
              Experience the dramatic transformation that only 12+ years of expertise can deliver.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button onClick={scrollToContact} className="btn btn-primary btn-large hero-btn-primary">
                Get Your Free Estimate
              </button>
              <a href="tel:5177557966" className="btn btn-secondary btn-large hero-btn-secondary">
                <FaPhone />
                (517) 755-7966
              </a>
            </motion.div>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            className="trust-bar"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="trust-item">
              <div className="trust-icon">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="trust-text">5-Star Rated</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <div className="trust-icon single">
                <FaShieldAlt />
              </div>
              <span className="trust-text">Fully Insured</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <div className="trust-icon single">
                <FaMapMarkerAlt />
              </div>
              <span className="trust-text">Locally Owned</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="scroll-indicator"
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        aria-label="Scroll to services"
      >
        <span>Explore Services</span>
        <FaArrowDown className="scroll-arrow" />
      </motion.button>
    </section>
  )
}

export default Hero
