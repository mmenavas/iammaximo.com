import React from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
// import Job from '../Job/Job';
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
              <CollapsibleItem key={item.id} header={item.company} icon='business'>
                <div className="job">
                  <div className="job__title">{item.title}</div>
                  <div className="job__time"><i className="tiny material-icons">event</i> {item.time}</div>
                  <div className="job__city"><i className="tiny material-icons">place</i> {item.city}</div>
                  <div className="job__description">{item.description}</div>
                </div>
              </CollapsibleItem>
            )}
          </Collapsible>
        </div>
      </Col>
    </Row>
  </div>
);

export default Resume;
