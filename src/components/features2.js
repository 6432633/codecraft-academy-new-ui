import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
              Our <b>Pro Courses</b> include a personalized <b>Individual Learning Plan</b>, tailored to your goals and progress for a more structured learning experience. With <b>Standard Courses</b>, you'll have access to online lessons and exercises to learn at your own pace.
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
              Our <b>Pro Courses</b> offer <b>Comprehensive Course Content</b>, covering in-depth topics through structured lessons and hands-on exercises. With <b>mentor-led</b> sessions, you'll receive <b>expert guidance</b> to master software testing concepts and industry best practices.
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
              Our <b>Pro Courses</b> include hands-on practice sessions designed to reinforce your skills through real-world tasks and projects. Gain practical experience to confidently apply your knowledge in a professional setting.
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src="/other-images/programmer-1653351_1920.png"
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src="/slider-asstes/engineer-4904884_1280.jpg"
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src="/slider-asstes/ai-generated-8237711_1280.jpg"
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature1ImgAlt: 'feature 1',
  feature1Description:
    "Our Pro Courses include a personalized Individual Learning Plan, tailored to your goals and progress for a more structured learning experience. With **Standard Courses**, you'll have access to online lessons and exercises to learn at your own pace.",
  feature3ImgAlt: 'image',
  feature2Title: 'Comprehensive Course Content',
  feature1Title: 'Individual Learning plan',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1582560486643-d51a9722b92d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1582719366794-4d27cd0a34a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Our courses cover a wide range of topics in software testing, ensuring you gain a deep understanding of the field.',
  feature3Title: 'Practise',
  feature2ImgAlt: 'Illustration of comprehensive course content',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1624957485502-cd76eb9ac7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features2.propTypes = {
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features2
