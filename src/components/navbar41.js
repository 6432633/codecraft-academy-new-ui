import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar41.css'

const Navbar41 = (props) => {
  return (
    <header className="navbar41-container">
      <header data-thq="thq-navbar" className="navbar41-navbar-interactive">
        <a href='/'>
        <img
          alt={props.logoAlt}
          src="/other-images/logo/new-logo.png"
          className="navbar41-image1"
        />
        </a>
        
        <div data-thq="thq-navbar-nav" className="navbar41-desktop-menu">
          <nav className="navbar41-links1">
            <a href={props.link1Url} className="thq-link thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar41-text3">Home</span>
                </Fragment>
              )}
            </a>
            <a href={props.link2Url} className="thq-link thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar41-text6">Courses</span>
                </Fragment>
              )}
            </a>
            <a href={props.link3Url} className="thq-link thq-body-small">
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar41-text8">Pricing</span>
                </Fragment>
              )}
            </a>
            <a href={props.link4Url} className="thq-link thq-body-small">
              {props.link4 ?? (
                <Fragment>
                  <span className="navbar41-text4">Contact Us</span>
                </Fragment>
              )}
            </a>
            <a href={props.link5Url} className="thq-link thq-body-small">
              {props.link5 ?? (
                <Fragment>
                  <span className="navbar41-text4">Learn Now</span>
                </Fragment>
              )}
            </a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar41-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar41-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar41-mobile-menu">
          <div className="navbar41-nav">
            <div className="navbar41-top">
              <a href='/'><img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar41-logo"
              /></a>
              <div data-thq="thq-close-menu" className="navbar41-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar41-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar41-links2">
              <a href="/" className="thq-link thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar41-text3">Home</span>
                  </Fragment>
                )}
              </a>
              <a href="#/courses" className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar41-text6">Courses</span>
                  </Fragment>
                )}
              </a>
              <a href="#/pricing" className="thq-link thq-body-small">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar41-text8">Pricing</span>
                  </Fragment>
                )}
              </a>
              <a href="#/contact" className="thq-link thq-body-small">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar41-text4">Contact Us</span>
                  </Fragment>
                )}
              </a>
              <a href="#/learning" className="thq-link thq-body-small">
                {props.link5 ?? (
                  <Fragment>
                    <span className="navbar41-text4">Learn Now</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar41.defaultProps = {
  link1: "Home",
  link2Url: '#/courses',
  link1Url: '/',
  link2: 'Courses',
  link3Url: '#/pricing',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'Codecraft Academy',
  link3: 'Pricing',
  link4Url: '#/contact',
  link4: 'Contact Us',
  link5Url: '#/learning',
  link5: 'Learn Now'
}

Navbar41.propTypes = {
  link1: PropTypes.element,
  link2Url: PropTypes.string,
  link1Url: PropTypes.string,
  link2: PropTypes.element,
  link3Url: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.element,
  link4Url: PropTypes.string,
  link4: PropTypes.element,
  link5Url: PropTypes.string,
  link5: PropTypes.element
}

export default Navbar41
