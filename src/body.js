import React from 'react';
import './css/body.css';
import TopBar from './components/topbar.js';
import Header from './components/header.js';
import AboutMe from './components/about-me.js';
import SkillsOverview from './components/skills-overview.js';
import Footer from './components/footer/footer.jsx';
import Contact from './components/contact.jsx';

export default class Body extends React.Component {

  constructor() {
    super();

    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {page: "index"};
  }

  handlePageChange(pageChosen) {
    if(this.state.page == pageChosen) {
      return;
    }
    this.setState({
      page: pageChosen,
    });
  }

  render() {
    if(this.state.page === "index") {
      return (
        <div>
          <TopBar onPageChange={this.handlePageChange} />
          <Header />
          <hr />
          <AboutMe />
          <hr />
          <SkillsOverview />
          <hr />
          <Footer />
        </div>
      );
    } else if(this.state.page === "contact") {
      return (
        <div>
          <TopBar onPageChange={this.handlePageChange} />
          <Contact />
          <hr />
          <Footer />
        </div>

      );
    }
    return;
  } // End of render
} // End of Body class
