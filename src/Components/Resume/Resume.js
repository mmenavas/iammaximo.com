import React from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import './Resume.css';

const Resume = props => (
  <div className="resume">
    <Row>
      <Col>
        <h1>Resume</h1>
        <div className="resume__work-experience">
          <h2>Work experience</h2>
          <Collapsible>
            {/* {Object.keys(obj).forEach((key,index) =>
             } */}
          </Collapsible>
        </div>
      </Col>
    </Row>
  </div>
);

export default Resume;
