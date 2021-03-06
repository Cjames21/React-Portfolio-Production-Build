import React from 'react';
import SocialButtons from '../social-buttons.js';
import ContactForm from './contact-form.jsx';
import ContactInfo from './contact-info.jsx';


export default class ContactInfoContainer extends React.Component {

  render() {
    return (
      <div className="row">        
        <ContactForm />
        <ContactInfo />
      </div>
    );
  }
}
