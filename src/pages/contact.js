import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Layout from '../components/layout'

import './contact.css'
import '../components/navbar.css'
import '../components/header.css'
import '../components/layout.css'


const ContactPage = () => (
  <div>
  <div className="wrapper">
  <Navbar />
  <Header subTitle="Join us or get in touch to learn more" />
  </div>

  <Layout>
    <div className="main">
        <div className="signup">
          <h3>Sign up</h3>
          <p>Very glad you are thinking of joining us! Please have a read of a few important details before you sing up:</p>
          <ul>
            <li>&gt; we are based in London, UK;</li>
            <li>&gt; we meet in person every month, sometimes more;</li>
            <li>&gt; we communicate via Slack in between meet-ups;</li>
            <li>&gt; all new sign-ups are required to agree with our code of conduct before attending an event;</li>
            <li>&gt; you will need to have a laptop to bring with you to events.</li>
          </ul>
          <p>Please fill out the form and follow the onboarding via Slack, come say hello once you signed up in the #general channel, 
          looking forward to seeing you there.</p>
          <div>
            <a href="https://lilianakastilio.typeform.com/to/MUBtwK" target="_blank">
            <button className="signup-btn" type="button">Sign Up</button></a>
          </div>
        </div>
        <div className="contact-container">
        <form id="contactform" action="https://formspree.io/lili@lilianakastilio.co.uk" method="POST">
          <h3>Contact Us</h3>
          <div>
            <input id="name" type="text" name="name" placeholder="Full name" required />
          </div>
          <div>
            <input id="email" type="email" name="_replyto" placeholder="E-mail" required />
          </div>
          <textarea id="placeholder" name="message" placeholder="Your message" required></textarea>
          <div>
            <input id="submit" type="submit" value="Send" />
          </div>
        </form>
        </div>
    </div>
  </Layout>
  </div>
  )

export default ContactPage

