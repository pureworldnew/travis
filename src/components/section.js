import React, { Component } from "react";

//title of project
function Title(props) {
  return (
    <h2>
      <span className="projectLink">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {" "}
          {props.name}{" "}
        </a>
      </span>
    </h2>
  );
}

//date project was completed in
function Date(props) {
  return <span>{props.date}</span>;
}

//all relavent languages and tools used in project
function Label(props) {
  return <span className="label">{props.label}</span>;
}

//short description of project
function Desc(props) {
  return <span className="description">{props.desc}</span>;
}

export default class Section extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title">
          <hr />
          <h2>&#187; Projects</h2>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2012~2022" />
          </div>
          <div>
            <Title name="Alight Solutions" link="https://www.carters.com/" />
            <div id="labels">
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="Typescript" />
              <Label label="React/Redux-Saga/Hooks" />
              <Label label="Node/Express" />
              <Label label="Express" />
              <Label label="Azure AD" />
              <Label label="AWS Cognito" />
            </div>
            <Desc
              desc="Migration from AWS Cognito User Auth into Azure AD Auth, Front-end page development in Typescript/React/Redux-Saga/Hooks/, Back-end REST api management with Auth middleware creation in Node/Express
"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2011-2012" />
          </div>
          <div>
            <Title
              name="Texas A & M Health Science Center"
              link="https://meetwithanyone.com/"
            />
            <div id="labels">
              <Label label="JavaScript" />
              <Label label="React" />
              <Label label="Redux-Saga" />
              <Label label="React Hook" />
              <Label label="CSS" />
              <Label label="Node" />
              <Label label="Express" />
              <Label label="AWS" />
              <Label label="MySQL" />
            </div>
            <Desc
              desc="Developed Front-end Web Pages according to Figma design, in full responsive mode
,	Implemented React UI features with REST API integration using React, Redux-Saga, Material-UI.
,	Google Calendar API integration in Node/Express
,	Twilio Message/SMS API integration, Sendgrid email integration
,	Performance fine tuning by removing unnecessary component rendering.
,	Node/Express REST system architecture design/implementation with DB design
,	Deployment using AWS EC2 / RDS with Nginx configuration, PM2
,	Leading Development progress in a team with some junior developers
,	Hybrid react native mobile app development
,	React Unit Testing with Jest/React testing library.
,	SPA Development and REST api development using Vue/Vuex/Vuetify/JS/Python/Django
"
            />
          </div>
        </div>
      </div>
    );
  }
}
