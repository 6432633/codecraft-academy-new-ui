import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'
import { useNavigate } from 'react-router-dom'

const CTA = (props) => {
  const navigate = useNavigate();
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="thq-button-filled cta-button" onClick={() => {navigate('/courses')}}>
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  heading1: 'Take your software testing skills to the next level',
  content1:
    'Explore our range of expert-led courses designed to enhance your knowledge and expertise in software testing.',
  action1: 'Browse Courses',
}

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA
