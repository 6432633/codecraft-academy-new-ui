import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'
import { useNavigate } from 'react-router-dom'

const Steps = (props) => {
  const navigate = useNavigate();
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
            Unlock innovative solutions designed to enhance your learning experience. Whether you're mastering software testing or advancing your career, our products provide the tools, knowledge, and support you need to succeed.
            </p>
            <div className="steps-actions">
              <button className="thq-button-animated thq-button-filled steps-button" onClick={() => navigate('/pricing')}>
                <span className="thq-body-small" >Enroll Now</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3">1</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text18 thq-heading-3">2</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3">3</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text24 thq-heading-3">4</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step1Description:
    'Browse through our selection of software testing courses and choose the one that best fits your needs.',
  step3Description:
    'Access course materials, watch video lectures, and practice your skills through hands-on exercises.',
  step2Title: 'Enroll in the Course',
  step2Description:
    'Enroll in the course of your choice by completing the purchase process  and visit Learn Now page on our platform.',
  step1Title: 'Choose Your Course',
  step3Title: 'Learn and Practice',
  step4Description:
    'Upon successful completion of the any Pro Course, you will demonstrate your software testing expertise.',
  step4Title: 'Get Ready for Interview',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps
