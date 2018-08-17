import React from 'react';
import PropTypes from 'prop-types';
import './Job.css';

const Job = props => (
  <CollapsibleItem header={props.company} icon='business'>
    <div className="job">
      <div className="job__title">{props.title}</div>
      <div className="job__time"><i class="tiny material-icons">event</i> {props.time}</div>
      <div className="job__city"><i class="tiny material-icons">place</i> {props.city}</div>
      <div className="job__description">{props.description}</div>
    </div>
  </CollapsibleItem>
  // <CollapsibleItem header='Arizona State University' icon='business'>
  //   <div className="job">
  //     <div className="job__position">Systems Analyst Senior</div>
  //     <div className="job__time"><i class="tiny material-icons">event</i> March 2017 - Current</div>
  //     <div className="job__location"><i class="tiny material-icons">place</i> Tempe, AZ</div>
  //     <div className="job__description">I was responsible for bringing my team up to speed with best practices, such as code reviews, and adoption of new technologies, such as docker. I also implemented new features and provided ongoing support for a large Drupal 7 LMS site known as Research Academy.</div>
  //   </div>
  // </CollapsibleItem>
);

Job.propTypes = {
  // id: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Job;
