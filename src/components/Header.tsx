import { useState, useEffect } from 'react'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import { PHONE_NUMBER, PHONE_NUMBER_RAW, BUSINESS_NAME } from '../constants'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo/Brand */}
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <h1 className="logo-text">{BUSINESS_NAME}</h1>
            <span className="logo-tagline">Professional Exterior Services</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <a href={`tel:${PHONE_NUMBER_RAW}`} className="btn btn-primary call-btn">
            <FaPhone />
            <span>Free Quote</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="mobile-nav-link"
            >
              {link.label}
            </button>
          ))}
          <a href={`tel:${PHONE_NUMBER_RAW}`} className="mobile-call-btn">
            <FaPhone /> Call {PHONE_NUMBER}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
