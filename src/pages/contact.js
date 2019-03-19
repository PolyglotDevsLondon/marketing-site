import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import './contact.css'
import '../components/navbar.css'
import '../components/footer.css'

const ContactPage = () => (
  <div>
    <div className="header2">
      <Navbar />
      <div className="joinus-box">
        <h2>Join us or get in touch <br />to learn more</h2>
      </div>
    </div>
  <div>
    <div className="signup">
      <h3>Sign up</h3>
      <p>Very glad you are thinking of joining us! Please have a read of a few important 
        details before you sing up: <br />> we are based in London, UK <br />> we meet in person every 
        month, sometimes more <br />> we communicate via Slack in between meet-ups <br />> all new sign-ups 
        are required to agree with our code of conduct before attending an event <br />> you will 
        need to have a laptop to bring with you to events. <br />Please fill out the form and follow 
        the onboarding via Slack, come say hello once you signed up in the #general channel, 
        looking forward to seeing you there.
      </p>
      <a href="https://lilianakastilio.typeform.com/to/MUBtwK" target="_blank"><button className="signup-btn" type="button">Sign Up</button></a>
    </div>
    <div className="contact-us">
      <div className="contact-container">
        <form id="contactform" action="https://formspree.io/lili@lilianakastilio.co.uk" method="POST">
          <h3>Contact Us</h3>
          <input id="name" type="text" name="name" placeholder="Full name" />
          <input id="email" type="email" name="_replyto" placeholder="E-mail" />
          <textarea id="placeholder" placeholder="Your message"></textarea>
          <input id="submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>

  <Footer />
  
  </div>
  )

export default ContactPage

