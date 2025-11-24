import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa'
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
              <h3>ProWash</h3>
              <p className="footer-tagline">Professional Exterior Services</p>
            </div>
            <p className="footer-description">
              Trusted pressure washing, painting, and restoration services in Lincoln and Beatrice, NE. Over 12 years of excellence.
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
              <li>Deck & Fence Staining</li>
              <li>Holiday Lighting</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaPhone />
                <a href="tel:5177557966">(517) 755-7966</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:Bryceredman83@icloud.com">Bryceredman83@icloud.com</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Beatrice, NE<br />Serving Lincoln & surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} ProWash. All rights reserved. | Licensed, Bonded & Insured
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
