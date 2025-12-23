import { motion } from 'framer-motion'
import { FaPhone, FaClipboardCheck, FaStar } from 'react-icons/fa'
import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: <FaPhone />,
      title: 'Request Your Free Quote',
      description: 'Give us a call or fill out our simple form. We\'ll discuss your needs and schedule a convenient time for a free, no-obligation estimate.'
    },
    {
      number: '02',
      icon: <FaClipboardCheck />,
      title: 'We Assess & Plan',
      description: 'Our experts evaluate your property, identify the best approach, and provide transparent, upfront pricing with no hidden fees or surprises.'
    },
    {
      number: '03',
      icon: <FaStar />,
      title: 'Watch the Transformation',
      description: 'Sit back while our professional team restores your property\'s brilliance. We handle everything and leave your space spotless.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="process" className="process">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">The Hassle-Free ProWash Method</h2>
          <p className="section-subtitle">
            Getting your property professionally cleaned has never been easier. Our streamlined process ensures a smooth experience from start to finish.
          </p>
        </motion.div>

        <motion.div
          className="process-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              variants={itemVariants}
            >
              <div className="step-number-wrapper">
                <div className="step-number">{step.number}</div>
                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
