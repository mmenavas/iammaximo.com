import React from 'react';
import PropTypes from 'prop-types';
import { CollapsibleItem } from 'react-materialize';
import './Job.css';

const Job = props => (
  <CollapsibleItem header={props.company} icon='business'>
    <div className="job">
      <div className="job__title">{props.title}</div>
      <div className="job__time"><i className="tiny material-icons">event</i> {props.time}</div>
      <div className="job__city"><i className="tiny material-icons">place</i> {props.city}</div>
      <div className="job__description">{props.description}</div>
    </div>
  </CollapsibleItem>
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
