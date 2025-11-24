import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes. We offer free, no-obligation estimates for all services. Just call us or fill out the form and we\'ll schedule a time to look at your project and give you a clear quote.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We\'re based in Beatrice and proudly serve Lincoln, Beatrice, and many surrounding Nebraska communities. If you\'re not sure you\'re in our area, just give us a call and we\'ll let you know.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes. ProWash is fully licensed, bonded, and insured so you\'re protected on every job.'
    },
    {
      question: 'Will pressure washing damage my home, deck, or roof?',
      answer: 'No. We use low-pressure soft-wash methods on siding, roofs, and more delicate surfaces. This lets us clean thoroughly without blasting or damaging your home.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most house washing and driveway jobs are completed in a few hours. Larger projects like full exterior painting may take several days. We\'ll give you a timeline up front so you know what to expect.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, check, and major credit cards. If you need a payment arrangement on a larger job, we\'re happy to talk through options.'
    },
    {
      question: 'Do I need to be home during the work?',
      answer: 'Not always. For many exterior jobs, you don\'t have to be home as long as we have access to the areas we\'re cleaning and a water source. We\'ll let you know what\'s needed when we schedule.'
    },
    {
      question: 'How often should I have my home pressure washed?',
      answer: 'Most homes benefit from a full exterior cleaning every 1–2 years, depending on shade, trees, and weather. We\'re happy to recommend a schedule based on your property.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq bg-light">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Have questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
          </p>
        </div>

        <div className="faq-list" data-aos="fade-up">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <FaChevronDown className="faq-icon" />
              </button>
              <div className="faq-answer">
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta" data-aos="fade-up">
          <p className="cta-text">Still have questions? We're here to help!</p>
          <a href="tel:5177557966" className="btn btn-primary">
            Call Us (517) 755-7966
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
