import React from 'react';
import './css/social-buttons.css';


export default class SocialButtons extends React.Component {


  render() {
    return (
      <div className="row social-buttons">
        <ul className="menu">
          <li onclick="window.open('https://twitter.com/cjameswebdev/media', '_blank')"><i className="fa fa-twitter"></i></li>
		      <li onclick="window.open('https://www.linkedin.com/in/charlie-james-16981479/', '_blank')"><i className="fa fa-linkedin"></i></li>
		      <li onclick=""><i className="fa fa-paper-plane"></i></li>
        </ul>
      </div>

    );
  }
}
