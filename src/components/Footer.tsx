import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa'
import { PHONE_NUMBER, PHONE_NUMBER_RAW, EMAIL, BUSINESS_NAME } from '../constants'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <h3>{BUSINESS_NAME}</h3>
              <p className="footer-tagline">Professional Exterior Services</p>
            </div>
            <p className="footer-description">
              Trusted pressure washing, painting, and restoration services in Lincoln and Beatrice, NE. Over 2,500 happy customers served.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61574731156820" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('hero')}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')}>Our Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-us')}>Why Choose Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')}>Gallery</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')}>Reviews</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}>About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')}>FAQ</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li>House Washing</li>
              <li>Window Cleaning</li>
              <li>Concrete & Brick Cleaning</li>
              <li>Soft-Wash Roof Cleaning</li>
              <li>Exterior & Interior Painting</li>
              <li>Tile & Grout Cleaning</li>
              <li>Graffiti Removal</li>
              <li>Christmas Lights</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaPhone />
                <a href={`tel:${PHONE_NUMBER_RAW}`}>{PHONE_NUMBER}</a>
              </li>
              <li>
                <FaEnvelope />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Beatrice, NE<br />Serving Lincoln & surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-tagline-bottom">
            Lincoln & Beatrice's Premier Exterior Cleaning Specialists. <span>Satisfaction Guaranteed.</span>
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. | Licensed, Bonded & Insured
          </p>
          <p className="credit">
            Website by James Pelton Web & AI
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
