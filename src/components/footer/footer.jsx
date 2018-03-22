import React from 'react';

import './css/footer.css';

export default class Footer extends React.Component {

  render() {
    return(
      <div className="row footer-container">
        <div className="large-4  small-12 columns">
			       <h5>charlestdjames1@gmail.com</h5>
		    </div>
		    <div className="large-4 small-12 columns">
			    <h5>
				    <span onclick="window.open('https://twitter.com/cjameswebdev/media', '_blank')"><i className="fa fa-twitter"></i></span>
				    <span onclick="window.open('https://www.linkedin.com/in/charlie-james-16981479/', '_blank')"><i className="fa fa-linkedin"></i></span>
				    <span onclick=""><i className="fa fa-paper-plane"></i></span>
			    </h5>
		    </div>
		    <div className="large-4 small-12 columns">
			    <h5>(613) 803-6794</h5>
		    </div>
      </div>

    );
  }
}
