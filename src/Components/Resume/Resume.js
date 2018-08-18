import React from 'react';
import { Row, Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize';
// import Job from '../Job/Job';
import './Resume.css';

const Resume = props => (
  <div className="resume">
    <Row>
      <Col>
        <h1>Resume</h1>
        <div className="resume__work-skills">
          <h2>Skills</h2>
          <Collection>
            {props.skills.map((item, index) =>
              <CollectionItem key={index}>
                <h4 className="skill-category">{item.name}</h4>
                {item.skills.map(skill =>
                  <span className="skill-item">{skill}</span>
                )}
              </CollectionItem>
            )}
          </Collection>
        </div>
        <div className="resume__work-experience">
          <h2>Work experience</h2>
          <Collapsible>
            {props.jobs.map((item, index) =>
              <CollapsibleItem key={index} header={item.company} icon='business'>
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
