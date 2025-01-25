import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar41 from '../components/navbar41'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing14 from '../components/pricing14'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'
import { useNavigate } from "react-router";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Helmet>
        <title>Codecraft Academy</title>
      </Helmet>
      <Navbar41
        link1={
          <Fragment>
            <span className="contact1-text10">Home</span>
          </Fragment>
        }

        link2={
          <Fragment>
            <span className="contact1-text13">Courses</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact1-text15">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact1-text11">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact1-text11">Learn Now</span>
          </Fragment>
        }

      ></Navbar41>
      <Hero></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2></Features2>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="pricing1-text107">$50</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="pricing1-text122" onClick={() => navigate('/enroll/3')}>Enroll Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="pricing1-text109">Manual Testing Pro</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="pricing1-text122" onClick={() => navigate('/enroll/3')}>Enroll Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="pricing1-text111">Software Testing(Cypress) Pro</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="pricing1-text112">Practice</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="pricing1-text113">
              Collection of practical exercises
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="pricing1-text114">Live instructor-led sessions</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="pricing1-text115">Individual Learning Plan</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="pricing1-text116">Practice</span>
          </Fragment>
        }
        plan2Feature51={
          <Fragment>
            <span className="pricing1-text116">Individual Learning Plan</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="pricing1-text117">
              Collection of practical exercises
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="pricing1-text118">Mock Interviews</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="pricing1-text119">Feature text goes here1</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="pricing1-text120">$1499</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="pricing1-text121" onClick={() => navigate('/enroll/4')}>Enroll Now</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="pricing1-text122" onClick={() => navigate('/enroll/2')}>Enroll Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="pricing1-text123">
              Access video lessons
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="pricing1-text124">Books and other materials</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="pricing1-text125">$50</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="pricing1-text126">Software Testing(Java)</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="pricing1-text127">Mock Interviews</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="pricing1-text128" onClick={() => navigate('/enroll/5')}>Enroll Now</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="pricing1-text129">
              Collection of practical exercises
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="pricing1-text130">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="pricing1-text131">
              Access video lessons
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing1-text132">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="pricing1-text133">CV Assistance</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="pricing1-text134">Manual Testing Standard</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="pricing1-text135">Software Testing(Java) Pro</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="pricing1-text136">Live instructor-led sessions</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="pricing1-text137">Mock Interviews</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="pricing1-text138">Feature text goes here</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="pricing1-text140">$50</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="pricing1-text142">CV Assistance</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="pricing1-text143">Live instructor-led sessions</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="pricing1-text145">$499</span>
          </Fragment>
        }

        plan3Feature4={
          <Fragment>
            <span className="pricing1-text147">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="pricing1-text148">$999</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="pricing1-text149">CV Assistance</span>
          </Fragment>
        }
        plan1Feature41={
          <Fragment>
            <span className="pricing1-text149">Individual Learning Plan</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="pricing1-text150">Books and other materials</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="pricing1-text152">
              Access video lessons
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="pricing1-text153">
              Books and other materials
            </span>
          </Fragment>
        }
      
        plan3Action1={
          <Fragment>
            <span className="pricing1-text157" onClick={() => navigate('/enroll/6')}>Enroll Now</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="pricing1-text158">$50</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="pricing1-text159">Software Testing(Cypress)</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
