import React from 'react';
import './css/contact.css';


export default class ContactForm extends React.Component {

  render() {
    return (
      <div className="large-6 small-12 columns">
        <h1>Contact Form</h1>
        <p>Have an idea you'd like to send my way? Feel free to fill out this contact form
          and I'll be in touch with you as soon as possible!
        </p>
        <br />
        <form action="contact_form_submission.php" method="POST" className="contact-form" id="contact-form">
          <label for="fName">First Name: </label>
          <input id="fName" name="fName" type="text" />

          <label for="lName">Last Name: </label>
          <input id="lName" name="lName" type="text" />

          <label for="phone">Phone: </label>
          <input id="phone" name="phone" type="tel" />

          <label for="email">E-mail: </label>
          <input id="email" name="email" type="email" />

          <label for="projType">Project Type</label>
          <input id="projType" name="projType" type="text" />

          <label for="projDesc">Project Description: </label>
          <textarea id="projDesc" name="projDesc" type="text" placeholder="Please provide a brief description of the project you have in mind..." />

          <button id="submit" type="submit" name="submit" className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}
