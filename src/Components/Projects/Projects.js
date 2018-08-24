import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import './Projects.css';

const Projects = props => (
  <div className="projects">
    <Row>
      <Col>
        <h1>Projects</h1>
          <ul className="projects__list">
            {props.projects.map((item, index) =>
              <li className="projects__item" key={index}>
                <Card header={<CardTitle reveal image={item.image} waves='light'/>}
                  title={item.name}
                  reveal={<p>{item.description}</p>}>
                  <p><a href={item.demo}>View demo</a></p>
                  <p><a href={item.source}>Open repo</a></p>
                </Card>
              </li>
            )}
          </ul>
      </Col>
    </Row>
  </div>
);

export default Projects;
