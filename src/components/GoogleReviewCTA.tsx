import { FaGoogle, FaStar } from 'react-icons/fa'
import { GOOGLE_REVIEW_URL, BUSINESS_NAME } from '../constants'
import './GoogleReviewCTA.css'

const GoogleReviewCTA = () => {
  return (
    <section className="google-review-cta">
      <div className="container">
        <div className="review-cta-content" data-aos="fade-up">
          <div className="review-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h3 className="review-cta-title">Love Our Work?</h3>
          <p className="review-cta-text">
            Help {BUSINESS_NAME} grow by sharing your experience. Your review helps other homeowners find quality service.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-google"
          >
            <FaGoogle />
            Review Us on Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviewCTA
