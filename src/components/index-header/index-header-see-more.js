import React from 'react';
import './css/index-header-see-more.css';

export default class HeaderSeeMore extends React.Component {
  
  render() {
    return(
      <div className="see-more-container">
        <button onclick="" type="button">
          Click here to learn more <span className="fa fa-arrow-down"></span>
        </button>
      </div>
    );
  }
}