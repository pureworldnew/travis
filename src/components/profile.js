import React, { Component } from "react";

//get icons
import githubIcon from "../icons/github_icon.svg";
import linkedlnIcon from "../icons/linkedln_icon.png";
import mePic from "../icons/new.png";
import emailIcon from "../icons/email_icon.png";
import resumeIcon from "../icons/resume.png";
import resumePDF from "../icons/resume.pdf";
import calendarIcon from "../icons/calendar.png";
import videoIcon from "../icons/video.png";
//Just name
function Name() {
  return <h2>Travis Dalton</h2>;
}

//all social links
function SocialLinks(props) {
  return (
    <h6>
      <a
        href="https://www.github.com/pureworldnew"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon" src={githubIcon} alt="" />
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/travisdev812/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon-linkedin" src={linkedlnIcon} alt="" />
        LinkedIn
      </a>
      <a href="mailto:travisdev812@gmail.com" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={emailIcon} alt="" />
        Email Me
      </a>
      <a href={resumePDF} target="_blank" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={resumeIcon} alt="" />
        Resume
      </a>
      <a
        href="https://calendly.com/travisdev812"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon-linkedin" src={calendarIcon} alt="" />
        Calendar
      </a>
    </h6>
  );
}

//short description
function Short(props) {
  return (
    <div className="padding-top" id="profile-description">
      Software Developer
    </div>
  );
}

export default class Profile extends Component {
  render() {
    return (
      <div id="parent" className="profile">
        <div id="profile-name">
          <Name />
          <SocialLinks />
          <Short />
        </div>
        <div className="frame">
          <img id="profile-pic" src={mePic} alt="" />
        </div>
      </div>
    );
  }
}
