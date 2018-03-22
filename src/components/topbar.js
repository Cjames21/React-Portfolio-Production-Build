import React from 'react';
import topbarLogo from '../img/logo-150-by-50.png';

import './css/topbar.css';


export default class TopBar extends React.Component {

    // NavBar will consist of img on the left side and the three navigation links on the right side.

    constructor() {
      super();
    }

    navBarClicked(pageClicked, e) {
      this.props.onPageChange(pageClicked);
    }

    render() {
        return (
          <nav className="top-bar">
           <div className="top-bar-left">
             <img src={topbarLogo} alt="C James Web Dev Logo" />
           </div>
           <div className="top-bar-right">
             <ul className="menu navigation">
               <li className="" onClick={(e) => this.navBarClicked("index", e)}><a>HOME</a></li>
               <li className="" onClick={(e) => this.navBarClicked("contact", e)}><a>CONTACT ME</a></li>
             </ul>
           </div>
          </nav>
        );

    }
}
