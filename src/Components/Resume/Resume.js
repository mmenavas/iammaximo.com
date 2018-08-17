import React from 'react';
import { Row, Col, Collapsible } from 'react-materialize';
import Job from '../Job/Job';
import './Resume.css';

const Resume = props => (
  <div className="resume">
    <Row>
      <Col>
        <h1>Resume</h1>
        <div className="resume__work-experience">
          <h2>Work experience</h2>
          <Collapsible>
            {props.jobs.map(item =>
              <Job
                key={item.id}
                company={item.company}
                title={item.title}
                city={item.city}
                time={item.time}
                description={item.description}
              />
            )}
          </Collapsible>
        </div>
      </Col>
    </Row>
  </div>
);

export default Resume;
