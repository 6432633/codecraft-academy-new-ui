import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Pricing1 from './views/pricing1'
import Contact1 from './views/contact1'
import NotFound from './views/not-found'
import Payment from './views/payment'
import Courses from './views/courses'
import TermsAndConditions from './views/termsandconditions'
import PaymentCallback from './views/paymentcallback'
import PrivacyPolicy from './views/privacy-policy'
import LearnNow from './views/learnnow'

const App = () => {
  return (
    <HashRouter>
    <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Pricing1/>} path="/pricing" />
        <Route element={<Contact1/>} path="/contact" />
        <Route element={<Payment/>} path="/enroll/:courseId"/>
        <Route element={<Courses/>} path="/courses"/>
        <Route element={<TermsAndConditions/>} path="/terms-and-conditions"/>
        <Route path="/payment-callback" element={<PaymentCallback />} />
        <Route element={<PrivacyPolicy/>} path='/privacy-policy'/>
        <Route element={<LearnNow/>} path='/learning'/>
        <Route element={NotFound} path="**" />
    </Routes>
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
