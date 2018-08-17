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
