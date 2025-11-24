import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCreditCard } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title text-white">Get Your Free Estimate Today</h2>
          <p className="section-subtitle text-white">
            Ready to transform your property? Fill out the form below or give us a call. We respond quickly!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper" data-aos="fade-right">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Your Phone"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Property Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Your Address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed *</label>
                <select id="service" name="service" required>
                  <option value="">Select a service...</option>
                  <option value="House Washing">House Washing</option>
                  <option value="Window Cleaning">Window Cleaning</option>
                  <option value="Concrete Cleaning">Concrete & Brick Cleaning</option>
                  <option value="Roof Cleaning">Roof Cleaning</option>
                  <option value="Painting">Exterior/Interior Painting</option>
                  <option value="Deck Staining">Deck & Fence Staining</option>
                  <option value="Other">Other / Multiple Services</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large submit-btn">
                Get Your Free Estimate
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info" data-aos="fade-left">
            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <a href="tel:5177557966" className="info-link">
                  (517) 755-7966
                </a>
                <p>Available 24/7 for emergencies</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <a href="mailto:Bryceredman83@icloud.com" className="info-link">
                  Bryceredman83@icloud.com
                </a>
                <p>We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Service Area</h3>
                <p className="info-text">Beatrice, NE</p>
                <p>Serving Lincoln & surrounding areas</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <p className="info-text">Mon-Sat: 7am - 7pm</p>
                <p>Emergency services available 24/7</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaCreditCard />
              </div>
              <div className="info-content">
                <h3>Payment Options</h3>
                <p className="info-text">Cash, Check, Credit Cards</p>
                <p>Flexible payment arrangements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
