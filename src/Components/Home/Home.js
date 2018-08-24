import React from 'react';
import { Link } from 'react-router-dom';
// import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'react-materialize';
import './Home.css';

const Home = props => (
  <Row>
    <Col>
      <div>
        <h5 className="center">
          Howdy! I'm a software developer from Phoenix, Arizona.
        </h5>
        <p>My main area of expertise is Drupal module development. I set up my local environment with Lando. I install Drupal via Composer. I generate boilerplate with Drupal Console. I debug code with Xdebug and PHPStorm. I write automated tests with PHPUnit and Behat. I clean up my code using PHP_CodeSniffer. I set up a continuous integration pipeline with GitHub and Travis CI. I nurture my Drupal knowledge by reading the API documentation and developer guides, inspecting the code in Drupal core and contributed module, attending conferences (e.g. DrupalCon), contribute patches, participating in Drupal Slack, and watching all kinds of Drupal videos online.</p>
        <ul>
          <li>If you'd like to learn about my skills and past work experience, check out my <Link className="page-link" to="/resume">resume</Link>!</li>
          <li>If you'd like to look at my personal projects, check out my <Link className="page-link" to="/portfolio">portfolio</Link>!</li>
          <li>If you'd like to  about me, check out my <Link className="page-link" to="/bio">bio</Link>!</li>
        </ul>
      </div>
    </Col>
  </Row>
);

export default Home;
