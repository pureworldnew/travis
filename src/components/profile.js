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
  return <h2>Dante Roland</h2>;
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
        href="https://www.linkedin.com/in/danteroland/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon-linkedin" src={linkedlnIcon} alt="" />
        LinkedIn
      </a>
      <a href="mailto:danterolandupgmail.com" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={emailIcon} alt="" />
        Email Me
      </a>
      <a href={resumePDF} target="_blank" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={resumeIcon} alt="" />
        Resume
      </a>
      <a
        href="https://calendly.com/danterolandup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon-linkedin" src={calendarIcon} alt="" />
        Calendar
      </a>

      <a
        href="https://www.youtube.com/watch?v=wPZ78JcITb8&ab_channel=DanteRoland"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon-linkedin" src={videoIcon} alt="" />
        Intro
      </a>
    </h6>
  );
}

//short description
function Short(props) {
  return (
    <div className="padding-top" id="profile-description">
      Senior Software Developer at Javascript/React/Node
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
