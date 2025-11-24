import { FaAward, FaDollarSign, FaShieldAlt, FaClock, FaLeaf } from 'react-icons/fa'
import './WhyUs.css'

const WhyUs = () => {
  const reasons = [
    {
      icon: <FaAward />,
      title: '12+ Years of Experience',
      description: 'Over a decade of serving Lincoln and Beatrice. Our experience means consistent, high-quality work you can count on.'
    },
    {
      icon: <FaDollarSign />,
      title: 'Honest, Up-Front Pricing',
      description: 'No hidden fees or surprise charges. We provide clear, written estimates before we start so you know exactly what to expect.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Fully Insured & Guaranteed',
      description: 'Licensed, bonded, and insured for your peace of mind. We stand behind every job with a satisfaction guarantee.'
    },
    {
      icon: <FaClock />,
      title: 'Emergency Services Available',
      description: 'Life doesn\'t wait, and neither should you. Call us 24/7 for urgent exterior cleaning and restoration needs.'
    },
    {
      icon: <FaLeaf />,
      title: 'Safe, Eco-Friendly Methods',
      description: 'We use low-pressure soft-wash techniques and environmentally responsible detergents that protect your home, family, and landscaping.'
    }
  ]

  return (
    <section id="why-us" className="why-us bg-light">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Why Choose ProWash?</h2>
          <p className="section-subtitle">
            Your home is your biggest investment. Trust it to professionals who care about quality, honesty, and your complete satisfaction.
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="reason-icon-wrapper">
                <div className="reason-icon">{reason.icon}</div>
              </div>
              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-us-stats" data-aos="fade-up">
          <div className="stat">
            <div className="stat-number">12+</div>
            <div className="stat-label">Years in Business</div>
          </div>
          <div className="stat">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
