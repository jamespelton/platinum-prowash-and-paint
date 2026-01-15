import { FaCheckCircle } from 'react-icons/fa'
import './About.css'

const About = () => {
  const values = [
    'Quality workmanship on every project',
    'Clear, honest communication',
    'Up-front, transparent pricing',
    'Respect for your property',
    'Environmental responsibility',
    'A customer satisfaction guarantee'
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2 className="about-title">Serving Nebraska with Pride — Over 2,500 Happy Customers</h2>
            <div className="about-divider"></div>
            <p className="about-paragraph">
              Platinum Surface Cleaning is a local, family-run business dedicated to restoring and protecting the beauty of homes and
              properties throughout Lincoln, Beatrice, and the surrounding Nebraska communities. What started as a
              one-person operation has grown into a trusted team known for quality, reliability, and
              honest service—now serving residential, commercial, and multi-family clients.
            </p>
            <p className="about-paragraph">
              Owner Bryce Redman built Platinum Surface Cleaning on a simple philosophy: treat every customer's property like your own. We
              take pride in providing expert pressure washing, soft-wash cleaning, painting, and restoration with
              clear communication from start to finish. No surprises, no hidden fees—just solid workmanship
              and complete customer satisfaction.
            </p>
            <p className="about-paragraph">
              Whether it's removing years of grime from your driveway, safely cleaning algae off your roof, or giving
              your deck a fresh new look, we're here to help. We're fully licensed, insured, and ready for projects big and small.
            </p>

            <h3 className="about-subtitle">Our Commitment to You</h3>
            <ul className="about-values">
              {values.map((value, index) => (
                <li key={index} className="value-item">
                  <FaCheckCircle className="value-icon" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-image" data-aos="fade-left">
            <img src="/images/hero/hero-lakehouse.jpg" alt="Platinum Surface Cleaning professional service" />
            <div className="about-badge">
              <div className="badge-content">
                <div className="badge-number">2,500+</div>
                <div className="badge-text">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
