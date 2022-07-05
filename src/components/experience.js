import React, { Component } from "react";

// Job section blueprint
function Job(props) {
  return (
    <div className="jobs">
      <div className="job-section">
        <h3>{props.co}</h3>
        <div>{props.title}</div>
      </div>
      <div className="job-section">{props.date}</div>
    </div>
  );
}

export default class Experience extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title">
          <hr />
          <h2>&#187; Experience</h2>
        </div>
        <Job
          co="Alight Solutions"
          title="Contract - Senior Software developer"
          date="Sep 2012 - May 2022"
        />
        <Job
          co="Texas A & M Health Science Center"
          title="Full time - Web Developer"
          date="Feb 2011 - Aug 2012"
        />
      </div>
    );
  }
}
