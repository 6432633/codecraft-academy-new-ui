import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact-text3 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content2">
            <img src='/other-images/logo/icons8-email.gif'/>
            <div className="contact-contact-info1">
              <div className="contact-content3">
                <h3 className="contact-text4 thq-heading-3">Email</h3>
                <p className="contact-text5 thq-body-large">{props.content3}</p>
              </div>
              <span className="contact-email thq-body-small">
              <a href="mailto:support@code-craft.academy">support@code-craft.academy</a>
              </span>
            </div>
          </div>
          <div className="contact-content4">
            <img src='/other-images/logo/icons8-whatsapp.gif' className="thq-icon-medium"/>
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text6 thq-heading-3">WhatsApp</h3>
                <p className="contact-text7 thq-body-large">{props.content4}</p>
              </div>
              <a aria-label="Chat on WhatsApp" href="https://wa.me/37369207444">+1 (800) 290-1358</a >
            </div>
          </div>
          <div className="contact-content6">
            <img src='/other-images/logo/icons8-skype.gif'/>
            <div className="contact-contact-info3">
              <div className="contact-content7">
                <h3 className="contact-text8 thq-heading-3">Skype</h3>
                <p className="contact-text9 thq-body-large">{props.content5}</p>
              </div>
              <a style={{marginTop:"22px"}}href="skype:support@code-craft.academy?chat">Start chat</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  content2: 'Our team is here to help you with any inquiries you may have.',
  email1: 'support@cade-craft.academy',
  address1: 'codecraftacademysupport',
  content3:
    'Feel free to contact us via email during our business hours.',
  content1: 'Have a question or need assistance? Reach out to us!',
  content4: 'We look forward to hearing from you on WhatsApp!',
  heading1: 'Contact Us',
  content5: 'We look forward to hearing from you on Skype!',
  phone1: '+1 (200) 290-1358',
}

Contact.propTypes = {
  content2: PropTypes.string,
  email1: PropTypes.string,
  address1: PropTypes.string,
  content3: PropTypes.string,
  content1: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  content5: PropTypes.string,
  phone1: PropTypes.string,
}

export default Contact
