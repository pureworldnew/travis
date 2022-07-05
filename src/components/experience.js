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
          co="Sky Republic Inc"
          title="Contract - Senior Software developer"
          date="Nov 2021 - Jan 2022"
        />
        <Job
          co="With - meetwithanyone.com"
          title="Full time - MERN stack Developer"
          date="Apr 2019 - Oct 2021"
        />
        <Job
          co="BMR Thermal Inc"
          title="Contract - MERN stack Developer"
          date="May 2017 - Mar 2019"
        />
        <Job
          co="AllSocial"
          title="Contract - Full stack Developer"
          date="Feb 2014 - Apr 2017"
        />
      </div>
    );
  }
}
