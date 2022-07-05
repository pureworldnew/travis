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
            <Title name="Alight Solutions" link="https://www.ucla.edu/" />
            <div id="labels">
              <Label label="HTML5" />
              <Label label="CSS3" />
              <Label label="JS/TS" />
              <Label label="React/Redux-Saga/Hooks" />
              <Label label="Node/Express" />
              <Label label="Azure AD" />
              <Label label="AWS EC2/Lambda/RDS/Serverless/S3" />
            </div>
            <Desc
              desc="Building Front-end in React/Redux-Saga/Hooks/Custom Hook/React Material
              UI/React Context api/Performance tuning
              React-Routing/JWT authentication/Redux-Thunk
              Building Back-end REST api system in Nodejs/Express/MongoDB
              3
              rd party api integration in Twilio/Sendgrid/Google Calendar/
              Deployment using AWS EC2 / DynamoDB using Nginx configuration, PM2
              React Native Hybrid mobile app development and publish into Google/App
              store
              AWS Lambda/Serverless development / deployment in Node.js
              Container management using Kubernetes/Docker
              AWS Cognito user authentication / Azure AD OAuth2 user authentication
              React Unit Testing with Jest/React testing library.
              Managing project with building MVP from scratch, and leading team with 3
              Junior developers with maintenance of that product.
              Front-end web pages in AngularJS/Angular/Material UI, in full responsive
              mode with Figma design
              Dashboard development/maintenance in PHP/Laravel/ Python/Django
              Web scrapping using Python selenium/Node puppeteer
              Deployment of project into Hosting server like Godaddy
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
              link="https://mend.com/"
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
              desc="Building several website / web application using
              HTML5/CSS3/Bootstrap/Jquery/Javascript from scratch.
              Basic User authentication/authorization implementation.
              Implemented a back-end REST system in PHP/Laravel/Codeigniter
              Integrated 3rd party APIs like Facebook, Stripe, Paypal, Google Maps, Google
              Calendar, Sendgrid,
              Database Design/Implementation according to the Business logic with MySQL
              Query Optimization/Performance tuning( CRM )
"
            />
          </div>
        </div>
      </div>
    );
  }
}
