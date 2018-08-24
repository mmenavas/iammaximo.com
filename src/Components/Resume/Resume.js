import React from 'react';
import { Row, Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize';
import './Resume.css';

const Resume = props => (
  <div className="resume">
    <Row>
      <Col>
        <h1>Resume</h1>
        <div className="resume__work-skills">
          <h2>Summary</h2>
          <p>I am a software developer who specializes in building Drupal applications and websites. My Drupal development skills include writing controllers, services, forms, blocks, render elements, theme functions, and automated tests.</p>
          <h2>Education</h2>
          <p>Bachelor of Science in Computer Systems Technology at Arizona State University (2010).</p>
          <h2>Skills</h2>
          <Collection className="shadow">
            {props.skills.map((item, index) =>
              <CollectionItem key={index}>
                <h4 className="skill-category">{item.name}</h4>
                {item.skills.map((skill, index) =>
                  <span className="skill-item" key={index}>{skill}</span>
                )}
              </CollectionItem>
            )}
          </Collection>
        </div>
        <div className="resume__work-experience">
          <h2>Work experience</h2>
          <Collapsible>
            {props.jobs.map((item, index) =>
              <CollapsibleItem key={index} header={
                <div>{item.company} <span className="job__accordion-icon"><i className="material-icons">expand_more</i></span></div>
                } icon='business'>
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
