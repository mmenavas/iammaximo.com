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
            <CollapsibleItem header='Arizona State University' icon='business'>
              <div className="job">
                <div className="job__position">Systems Analyst Senior</div>
                <div className="job__time"><i class="tiny material-icons">event</i> March 2017 - Current</div>
                <div className="job__location"><i class="tiny material-icons">place</i> Tempe, AZ</div>
                <div className="job__description">I was responsible for bringing my team up to speed with best practices, such as code reviews, and adoption of new technologies, such as docker. I also implemented new features and provided ongoing support for a large Drupal 7 LMS site known as Research Academy.</div>
              </div>
            </CollapsibleItem>
          </Collapsible>

          {/* <Row>
            <Col s={12} m={6} l={4} >
              <Card header={
                  <CardTitle reveal image={"/img/companies/asu-ked-logo.jpg"} waves='light'/>
                }
                title="2017 - 2018"
                reveal={

                }>
              </Card>
            </Col>
            <Col s={12} m={6} l={4} >
              <Card header={
                  <CardTitle reveal image={"/img/companies/meltmedia-logo.jpg"} waves='light'/>
                }
                title="Drupal Lead"
                reveal={
                  <div className="job">
                    <div className="job__company">meltmedia</div>
                    <div className="job__dates">July 2015 - September 2016</div>
                    <div className="job__city">Tempe, AZ</div>
                    <div className="job__description">I provided mentoring for front end developers who were new to Drupal. I also got hands on experience working with Drupal 8, object oriented PHP, compsoser, Salesforce API, and Google Maps API.</div>
                  </div>
                }>
              </Card>
            </Col>
            <Col s={12} m={6} l={4} >
              <Card header={
                  <CardTitle reveal image={"/img/companies/mcmurrytmg-logo.jpg"} waves='light'/>
                }
                title="PHP Developer"
                reveal={
                  <div className="job">
                    <div className="job__company">McMurry/TMG (contract work)</div>
                    <div className="job__dates">March 2015 - June 2015</div>
                    <div className="job__city">Tempe, AZ</div>
                    <div className="job__description">I was responsible for creating new features and providing support for Drupal and WordPres websites. Two large projects I worked on as a backend developer were Marriot's Meetings Imagined and Charles Schwab's Insights &amp; Ideas.</div>
                  </div>
                }>
              </Card>
            </Col>
          </Row> */}
        </div>
      </Col>
    </Row>
  </div>
);

export default Resume;
