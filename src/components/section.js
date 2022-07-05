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
            <Date date="2021~2022" />
          </div>
          <div>
            <Title name="Sky Republic Inc" link="https://www.skyrepublic.com" />
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
            <Date date="2019-2021" />
          </div>
          <div>
            <Title
              name="With - meetwithanyone.com"
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

        <div id="section">
          <div id="date">
            <Date date="2017-2019" />
          </div>
          <div>
            <Title name="BMR Thermal Inc" link="https://www.bmrthermal.com/" />
            <div id="labels">
              <Label label="React" />
              <Label label="Node" />
              <Label label="Javascript" />
              <Label label="Redux-Saga" />
              <Label label="React Hooks" />
              <Label label="AWS" />
            </div>
            <Desc
              desc="React Front-end web pages with figma design, in full responsive mode
,	Building different kinds of components using functional components using react Material UI, redux-saga, hooks
,	Node/Express REST API architecture design/implementation including Database schema design according to the business logic
,	AWS Lambda function development / deployment, EC2 instance creation and REST api deployment using EC2 instance with PM2
"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2014~2017" />
          </div>
          <div>
            <Title name="AllSocial" link="allsocial.com" />
            <div id="labels">
              <Label label="HTML5" />
              <Label label="CSS3" />
              <Label label="JavaScript" />
              <Label label="React" />
              <Label label="Node/Express" />
              <Label label="PHP" />
              <Label label="Laravel" />
              <Label label="Google API" />
            </div>
            <Desc
              desc="Implemented Front-end UI using React/Reactstrap/CSS3
,	Implemented a back-end REST system for Node/Express.js/PostgreSQL, and Google Maps API.
,	Integrated social networking APIs like Facebook, 
,	Implemented payment modules using Stripe and Paypal
,	Automated manual data entry systems in the projects using React, resulting in a 50% reduction in the application processing delay and 30% less error in data inconsistency.
,	Building several website / web application using HTML5/CSS3/Bootstrap/Jquery/Javascript
,	Basic User authentication/authorization implementation.
,	Social user registration/login with Google, Facebook API integration
,	Database Design/Implementation according to the Business logic ( CRM )
,	Custom CRM system development using PHP/Laravel framework from scratch
,	Lowered DB Query loading time by 70% using Database Fine tuning( index tuning, query tuning, schema tuning )
"
            />
          </div>
        </div>
      </div>
    );
  }
}
